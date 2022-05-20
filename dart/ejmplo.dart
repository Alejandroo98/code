void main(List<String> args) {
  List<int> numerosEnteros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  bool isPar(int num1) {
    if (num1 % 2 == 0) return true;

    return false;
  }

  void printTxt(bool parImpar, int num1) {
    parImpar ? print('Numero par: ${num1}') : print('Numero  impar: ${num1}');
  }

  void enteros(List<int> num1) {
    for (var i = 0; i < num1.length; i++) {
      if (isPar(num1[i])) printTxt(true, num1[i]);

      if (!isPar(num1[i])) printTxt(false, num1[i]);
      ;
    }
  }

  enteros(numerosEnteros);
}
