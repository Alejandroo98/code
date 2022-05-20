import 'dart:html';

import 'package:flutter/material.dart';
import 'package:medici_app/ui/input_decorations.dart';
import 'package:medici_app/widgets/card_container.dart';
import 'package:medici_app/widgets/widgets.dart';

class LoginScreen extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: AuthBackground(
        child: SingleChildScrollView(
          child: Column(
            children: [

              SizedBox( height: 250, ),
              CardContainer(
                 child: Column(
                   children: [

                     SizedBox( height: 10, ),
                     Text("Login", style: Theme.of(context).textTheme.headline4),
                     SizedBox( height: 30, ),

                     _LoginForm()
                     
                   ],
                 )
              ),
              
              SizedBox( height: 50, ),
              Text("Registrarme", style: TextStyle( fontSize: 18, fontWeight: FontWeight.bold ))
              
              
            ],
          ),
        )
      ),
    );
  }
}


class _LoginForm extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Form(
        //TODO: mantener la referencia al KEY
        child: Column(
          children: [


            TextFormField(
              autocorrect: false,
              keyboardType:  TextInputType.emailAddress,
              decoration: InputDecorations.authInputDecoration(
                hintText: "Cedula", 
                labelText: "Nombres",
                prefixIcon: Icons.alternate_email_outlined
                )
            ),

            SizedBox( height: 30 ),

            

            TextFormField(
              autocorrect: false,
              keyboardType:  TextInputType.emailAddress,
              decoration: InputDecorations.authInputDecoration(
                hintText: "1717121451", 
                labelText: "Cedula",
                prefixIcon: Icons.alternate_email_outlined
                )
            ),

            SizedBox( height: 30 ),

            
            TextFormField(
              autocorrect: false,
              keyboardType:  TextInputType.emailAddress,
              decoration: InputDecorations.authInputDecoration(
                hintText: "099456789", 
                labelText: "Telefono",
                prefixIcon: Icons.alternate_email_outlined
                )
            ),

            SizedBox( height: 30 ),
            

            TextFormField(
              autocorrect: false,
              obscureText: false,
              keyboardType:  TextInputType.emailAddress,
              decoration: InputDecorations.authInputDecoration(
                hintText: "******", 
                labelText: "Contraseña",
                prefixIcon: Icons.lock_outline
              )
            ),

            SizedBox( height: 30 ),
            

            TextFormField(
              autocorrect: false,
              obscureText: false,
              keyboardType:  TextInputType.emailAddress,
              decoration: InputDecorations.authInputDecoration(
                hintText: "******", 
                labelText: "Repetir Contraseña",
                prefixIcon: Icons.lock_outline
              )
            ),

            SizedBox( height: 30 ),

  MaterialButton(
    shape: RoundedRectangleBorder( borderRadius: BorderRadius.circular(10) ),
    disabledColor: Colors.green,
    elevation: 0,
    color: Colors.deepPurple,
    child: Container(
      padding: EdgeInsets.symmetric( horizontal: 80, vertical: 15 ),
      child: Text("Ingresar", style: TextStyle( color: Colors.white ),)
    ),
    onPressed: (){},
  )

            
        ],)
      )
    );
  }
}