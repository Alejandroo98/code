import 'package:flutter/material.dart';
import 'package:medici_app/screens/home_Screen.dart';
import 'package:medici_app/screens/screens.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Material App',
      initialRoute: "login",
      routes: {
        "login": ( _ ) => LoginScreen(),
        "home": ( _ ) => HomeScreen(),
      },
      theme: ThemeData.light().copyWith(
        scaffoldBackgroundColor: Colors.grey[300]
      ),
    );
  }
}