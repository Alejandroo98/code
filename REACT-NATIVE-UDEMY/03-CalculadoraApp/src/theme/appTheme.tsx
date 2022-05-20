import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'black',
  },

  calculadoraContainer: {
    paddingHorizontal: 20,
    // backgroundColor: 'red',
    flex: 1,
    justifyContent: 'flex-end',
  },

  resultado: {
    color: 'white',
    fontSize: 50,
    textAlign: 'right',
    marginBottom: 10,
  },

  resultadoPequeno: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 25,
    textAlign: 'right',
  },

  /* Color gris ->  #333333 */
  boton: {
    height: 70,
    width: 70,
    backgroundColor: '#2D2D2D',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 7,
  },

  botonTexto: {
    textAlign: 'center',
    padding: 10,
    fontSize: 24,
    color: 'black',
  },

  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
});
