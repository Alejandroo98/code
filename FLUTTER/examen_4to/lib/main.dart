import 'dart:ui';

import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  static const String _title = 'EXAMEN - JEFFERSON ALAVA';

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      title: _title,
      home: MyStatefulWidget(),
    );
  }
}

class MyStatefulWidget extends StatefulWidget {
  const MyStatefulWidget({Key? key}) : super(key: key);

  @override
  State<MyStatefulWidget> createState() => _MyStatefulWidgetState();
}

class _MyStatefulWidgetState extends State<MyStatefulWidget> {
  int _selectedIndex = 0;
  static const TextStyle optionStyle =
      TextStyle(fontSize: 30, fontWeight: FontWeight.bold);


  static const List<Widget> _widgetOptions = <Widget>[
    ImgAssets(),
    Text(
      'OPCION DOS',
      style: optionStyle,
    ),
  ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      floatingActionButtonLocation: FloatingActionButtonLocation.startFloat,
      floatingActionButton: FloatingActionButton(
        child: const Icon(Icons.ac_unit),
        onPressed: () {},
      ),
      appBar: AppBar(
        title: const Center(child: Text('EXAMEN - JEFFERSON ALAVA')),
      ),
      body: Center(
        child: _widgetOptions.elementAt(_selectedIndex),
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.account_circle),
            label: 'Opcion 1',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.accessible_forward_outlined),
            label: 'Opcion 1',
          ),
        ],
        currentIndex: _selectedIndex,
        selectedItemColor: Colors.amber[800],
        onTap: _onItemTapped,
      ),
    );
  }
}

class ImgAssets extends StatelessWidget {
  const ImgAssets({Key? key}) : super(key: key);
  static const TextStyle examColor = TextStyle(color: Colors.blue, fontWeight: FontWeight.bold);


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.end,
        children: [
          Image.network(
              "https://cdnnmundo1.img.sputniknews.com/img/108347/28/1083472840_0:40:2201:1424_1920x0_80_0_0_b08f649044b0165acfda06be5737e138.jpg"),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: const [
              Text("• Mi nombres es Jefferson Alava", style: examColor ),
              Text("• Mi carrera es desarrollo de software", style: examColor ),
              Text("• Cruso el 4to semestre", style: examColor ),
            ],
          )
        ],
      ),
    );
  }
}
