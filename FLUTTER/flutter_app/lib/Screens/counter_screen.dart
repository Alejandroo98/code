import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class CounterScreen extends StatefulWidget {
  const CounterScreen({Key? key}) : super(key: key);

  @override
  State<CounterScreen> createState() => _CounterScreenState();
}

class _CounterScreenState extends State<CounterScreen> {
  int counter = 10;

  void sumar() {
    counter++;
    setState(() {});
  }

  void restar() {
    counter--;
    setState(() {});
  }

  void resetear() {
    counter = 0;
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    TextStyle txt = const TextStyle(
        color: Colors.white, fontSize: 30, backgroundColor: Colors.black);
    TextStyle number = const TextStyle(color: Colors.red, fontSize: 40);

    return Scaffold(
      backgroundColor: Colors.cyan[200],
      appBar: AppBar(
          elevation: 3,
          title: const Center(
            child: Text("CounterScreen"),
          )),
      body: Center(
        child: Column(mainAxisAlignment: MainAxisAlignment.center,
            // crossAxisAlignment:CrossAxisAlignment.center,
            children: <Widget>[
              Text("Nro Clicks:", style: txt),
              Text('$counter', style: number),
            ]),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
      floatingActionButton: CustomButtonAction(

        sumarFn: sumar,
        restarFn: restar,
        resetearFn: resetear
        
      ),
    );
  }
}

class CustomButtonAction extends StatelessWidget {

  final Function sumarFn;
  final Function restarFn;
  final Function resetearFn;
  
  const CustomButtonAction({
    Key? key,
    required this.sumarFn,
    required this.restarFn,
    required this.resetearFn,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: [
        FloatingActionButton(
          child: const Icon(Icons.add),
          onPressed: () =>  sumarFn(),
          // onPressed: () =>  setState( ()=> counter++ )
        ),

        // const SizedBox( width: 20 ),

        FloatingActionButton(
          child: const Text("RESET"),
          onPressed: () =>  resetearFn(),
          // onPressed: () =>  setState( ()=> counter = 0 )
        ),

        //const SizedBox( width: 20 ), //Este wid son cajas invicibles que las puedes usar para separar otros wid por ejemplo

        FloatingActionButton(
          child: const Text("-"),
          onPressed: () => restarFn(),
          // onPressed: () =>  setState( ()=> counter-- )
        ),
      ],
    );
  }
}
