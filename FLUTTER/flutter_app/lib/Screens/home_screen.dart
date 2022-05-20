import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

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
            child: Text("Tarea"),
          )),
      body: Center(
        child: Column(mainAxisAlignment: MainAxisAlignment.center,
            // crossAxisAlignment:CrossAxisAlignment.center,
            children: <Widget>[
              Text("Nro Clicks:", style: txt),
              Text("10", style: number),
            ]),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
      floatingActionButton: FloatingActionButton(
        child: const Icon( Icons.add ), 
        onPressed: () {
        print("Soy yo de nuevo");
      }),
    );
  }
}
