import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

void main() {
  runApp(MaterialApp(
    debugShowCheckedModeBanner: false,
    home: Homepage(),
  ));
}

class Homepage extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body:SafeArea(
        child: Container(
          width: double.infinity,
          height: MediaQuery.of(context).size.height,
           child: Column(
             children: <Widget>[
               Column(
                 crossAxisAlignment: CrossAxisAlignment.center,
                 children: <Widget>[
                   Text("Welcome",style:TextStyle(
                     fontWeight: FontWeight.bold,
                     fontSize: 30
                   ),),
                   SizedBox(height: 20,),
                   Text("Verificacion",
                   textAlign: TextAlign.center,
                   style: TextStyle(
                     color: Colors.grey[700],
                     fontSize: 15
                   ),),
                 ],
               ),
               Container(
                 height: MediaQuery.of(context).size.height/3,
                 decoration: BoxDecoration(
                   image: DecorationImage(
                     image: AssetImage('assets/illustration.png')
                   ),
                 ),
               ),
               Column(
                 children: <Widget>[
                   MaterialButton(
                     height: 60,
                     onPressed: () {},
                     shape: RoundedRectangleBorder(
                       side: BorderSide(
                         color: Colors.black
                       ),
                     ),
                     child: Text("Login", style: TextStyle(
                       fontWeight: FontWeight.w600,
                       fontSize: 18
                     ),),
                   )
                 ],
               ),
             ],
           ),
        ),
      ),
    );
  }
}