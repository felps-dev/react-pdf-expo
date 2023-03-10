import { StyleSheet } from 'react-native';

import { Document, Image, Page, Text, View } from './react-pdf-expo';

const styles = StyleSheet.create({
  page: {},
  body: {
    backgroundColor: '#fffb88',
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
  },
  productFirstItem: {
    borderLeft: '1px dashed #000',
  },
  productLastRow: {
    borderBottom: '1px dashed #000',
  },
  productItem: {
    borderTop: '1px dashed #000',
    borderRight: '1px dashed #000',
  },
  topBar: {
    display: 'flex',
    flexDirection: 'column',
  },
  boxProduct: {
    boxSizing: 'border-box',
    padding: 5,
  },
  width15: {
    width: '15%',
  },
  width40: {
    width: '40%',
  },
  topbarTop: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 20,
    borderBottom: '1px dashed #333',
    paddingBottom: 20,
  },
  topbarBottom: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    marginBottom: 20,
    borderBottom: '1px dashed #333',
    paddingBottom: 20,
  },
  marketInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    fontSize: 14,
  },
  title_price: {
    fontSize: 14,
  },
  text_price: {
    fontSize: 14,
  },
  danfeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  danfeSubTitle: {
    fontSize: 14,
  },
  products: {
    display: 'flex',
    flexDirection: 'column',
  },
  product_header: {
    display: 'flex',
    flexDirection: 'row',
  },
  product_body: {
    display: 'flex',
    flexDirection: 'column',
  },
  product_item: {
    display: 'flex',
    flexDirection: 'row',
  },
  pagamentos: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    borderBottom: '1px dashed #333',
    paddingBottom: 20,
    marginBottom: 5,
  },
  pagamento_box: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 2.5,
    boxSizing: 'border-box',
  },
  cupom_id: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 5,
    marginBottom: 20,
    borderBottom: '1px dashed #333',
    paddingBottom: 10,
  },
  id_box: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 2.5,
    paddingRight: 2.5,
    boxSizing: 'border-box',
  },
  qrcode: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
});

const CupomPdf = ({ cupom, _print, products, formas, loja }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.body}>
          <View style={styles.topBar}>
            <View style={styles.topbarTop}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginBottom: 5,
                }}>
                <Text
                  style={{
                    ...styles.text,
                    textAlign: 'center',
                  }}>
                  MERCADO: Nome mercado
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                <View>
                  {_print ? (
                    <View
                      style={{
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                      }}>
                      <Image height="50px" width="50px" />
                    </View>
                  ) : (
                    <View
                      style={{
                        width: '50px',
                        height: '50px',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        display: 'flex',
                      }}
                    />
                  )}
                </View>
                <View
                  style={{
                    ...styles.marketInfo,
                    marginLeft: 5,
                  }}>
                  <Text style={styles.text}>CNPJ: ...</Text>
                  <Text style={styles.text}>Endere??o: ...</Text>
                </View>
              </View>
            </View>
            <View style={styles.topbarBottom}>
              <Text style={styles.danfeTitle}>
                DANFE NFC-e Documento Auxiliar da Nota Fiscal de Consumidor Eletr??nico
              </Text>
              <Text style={styles.danfeSubTitle}>
                NFC-e n??o permite aproveitamento de cr??dito de ICMS
              </Text>
            </View>
          </View>
          <View style={styles.products}>
            <View style={styles.product_header}>
              <View
                style={{
                  display: 'flex',
                  ...styles.productFirstItem,
                  ...styles.productItem,
                  ...styles.boxProduct,
                  ...styles.width15,
                }}>
                <Text style={styles.text}>C??d.</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  ...styles.productItem,
                  ...styles.boxProduct,
                  ...styles.width40,
                }}>
                <Text style={styles.text}>Descri????o</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  ...styles.productItem,
                  ...styles.boxProduct,
                  ...styles.width15,
                }}>
                <Text style={styles.text}>Qtde</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  ...styles.productItem,
                  ...styles.boxProduct,
                  ...styles.width15,
                }}>
                <Text style={styles.text}>Valor</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  ...styles.productItem,
                  ...styles.boxProduct,
                  ...styles.width15,
                }}>
                <Text style={styles.text}>Total</Text>
              </View>
            </View>
            <View style={styles.product_body}>
              <View style={styles.product_item}>
                <View
                  style={{
                    display: 'flex',
                    ...styles.productFirstItem,
                    ...styles.productItem,
                    ...styles.boxProduct,
                    ...styles.width15,
                  }}>
                  <Text style={styles.text}>00001</Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    ...styles.productItem,
                    ...styles.boxProduct,
                    ...styles.width40,
                  }}>
                  <Text style={styles.text}>Produto 1</Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    ...styles.productItem,
                    ...styles.boxProduct,
                    ...styles.width15,
                  }}>
                  <Text style={styles.text}>1</Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    ...styles.productItem,
                    ...styles.boxProduct,
                    ...styles.width15,
                  }}>
                  <Text style={styles.text}>19,99</Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    ...styles.productItem,
                    ...styles.boxProduct,
                    ...styles.width15,
                  }}>
                  <Text style={styles.text}>19,99</Text>
                </View>
              </View>
              {products.length > 0
                ? products.map((product, idx) => {
                    const lastRow = products.length - 1 === idx;
                    let localLastRow = {};
                    if (lastRow) {
                      localLastRow = styles.productLastRow;
                    }
                    let price = product.price;
                    if (product.promo_price) {
                      price = product.promo_price;
                    }

                    return (
                      <View style={styles.product_item}>
                        <View
                          style={{
                            display: 'flex',
                            ...styles.productFirstItem,
                            ...styles.productItem,
                            ...styles.boxProduct,
                            ...styles.width15,
                            ...localLastRow,
                          }}>
                          <Text style={styles.text}>{product.id}</Text>
                        </View>
                        <View
                          style={{
                            display: 'flex',
                            ...styles.productItem,
                            ...styles.boxProduct,
                            ...styles.width40,
                            ...localLastRow,
                          }}>
                          <Text style={styles.text}>{product.name}</Text>
                        </View>
                        <View
                          style={{
                            display: 'flex',
                            ...styles.productItem,
                            ...styles.boxProduct,
                            ...styles.width15,
                            ...localLastRow,
                          }}>
                          <Text style={styles.text}>{product.quantity}</Text>
                        </View>
                        <View
                          style={{
                            display: 'flex',
                            ...styles.productItem,
                            ...styles.boxProduct,
                            ...styles.width15,
                            ...localLastRow,
                          }}>
                          <Text style={styles.text}>
                            {new Intl.NumberFormat('pt-BR', {
                              style: 'currency',
                              currency: 'BRL',
                            }).format(price)}
                          </Text>
                        </View>
                        <View
                          style={{
                            display: 'flex',
                            ...styles.productItem,
                            ...styles.boxProduct,
                            ...styles.width15,
                            ...localLastRow,
                          }}>
                          <Text style={styles.text}>
                            {new Intl.NumberFormat('pt-BR', {
                              style: 'currency',
                              currency: 'BRL',
                            }).format(price * product.quantity)}
                          </Text>
                        </View>
                      </View>
                    );
                  })
                : null}
            </View>
            <View style={styles.pagamentos}>
              <View style={styles.pagamento_box}>
                <View>
                  <Text style={styles.title_price}>QTD. TOTAL DE ITENS</Text>
                </View>
                <View>
                  <Text style={styles.text_price}>{products.length}</Text>
                </View>
              </View>
              <View style={styles.pagamento_box}>
                <View>
                  <Text style={styles.title_price}>VALOR TOTAL</Text>
                </View>
                <View>
                  <Text style={styles.text_price}>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(cupom.total)}
                  </Text>
                </View>
              </View>
              <View style={styles.pagamento_box}>
                <View>
                  <Text style={styles.title_price}>VALOR PAGO</Text>
                </View>
                <View>
                  <Text style={styles.text_price}>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(cupom.payed_value)}
                  </Text>
                </View>
              </View>
              <View style={styles.pagamento_box}>
                <View style={styles.title_price}>
                  <Text style={styles.title_price}>TROCO</Text>
                </View>
                <View>
                  <Text style={styles.text_price}>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(cupom.troco)}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  ...styles.pagamento_box,
                  marginTop: 5,
                }}>
                <View>
                  <Text style={styles.title_price}>FORMAS DE PAGAMENTO</Text>
                </View>
                <View>
                  <Text style={styles.title_price}>VALOR PAGO</Text>
                </View>
              </View>
              {formas.length > 0
                ? formas.map((forma, idx) => {
                    return (
                      <View style={styles.pagamento_box}>
                        <View>
                          <Text style={styles.text_price}>1</Text>
                        </View>
                        <View>
                          <Text style={styles.text_price}>
                            {new Intl.NumberFormat('pt-BR', {
                              style: 'currency',
                              currency: 'BRL',
                            }).format(forma.value)}
                          </Text>
                        </View>
                      </View>
                    );
                  })
                : null}
            </View>
            <View style={styles.cupom_id}>
              <View style={styles.id_box}>
                <View>
                  <Text style={styles.text_price}>N??</Text>
                </View>
                <View>
                  <Text style={styles.text_price}>000{cupom.id}</Text>
                </View>
              </View>
              <View style={styles.id_box}>
                <View>
                  <Text style={styles.text_price}>Data emiss??o</Text>
                </View>
                <View>
                  <Text style={styles.text_price}>2</Text>
                </View>
              </View>
            </View>
            <View style={styles.qrcode}>
              {_print ? (
                <View
                  style={{
                    width: '94.5px',
                    height: '94.5px',
                    display: 'flex',
                  }}>
                  <Image height="auto" width="70%" />
                </View>
              ) : (
                <View
                  style={{
                    width: '200px',
                    height: '200px',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
              )}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default CupomPdf;
