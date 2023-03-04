import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

import CupomPdf from './pdv-print';
import { generateHTMLDoc } from './react-pdf-expo';

export default function App() {
  const cupom = CupomPdf({
    cupom: {
      id: 1,
      data: '2021-01-01',
      total: 100,
      payed_value: 100,
    },
    products: [],
    formas: [],
  });

  const generatePDF = async () => {
    const rcphtml = generateHTMLDoc(cupom);
    console.log(rcphtml);
    const { uri } = await printToFileAsync({ html: rcphtml });
    console.log('File has been saved to:', uri);
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Click me" onPress={() => generatePDF()} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
