

import 'package:flutter/material.dart';
import '../utils/router.dart';

class LoginScreen extends StatefulWidget {
  @override
  _LoginScreenState createState() => _LoginScreenState();
}

class _LoginData {
  String email = '';
  String password = '';
}
class _LoginScreenState extends State<LoginScreen> {
  //TextStyle style = TextStyle(fontFamily: 'Montserrat', fontSize: 20.0);
  _LoginData _data = new _LoginData();
   final GlobalKey<FormState> _formKey = new GlobalKey<FormState>();
   String _validatePassword(String value) {
   if (value.length < 8) {
     return 'The Password must be at least 8 characters.';
   }

   return null;
 }

 String _validateEmail(String value) {

   if(!(value.length>0 && value.contains("@") && value.contains("."))){
   return 'The E-mail Address must be a valid email address.';
   }
   return null;
 }

  void _submit() {
   if (this._formKey.currentState.validate()) {
     _formKey.currentState.save(); // Save our form now.

     print('Printing the login data.');
     print('Email: ${_data.email}');
     print('Password: ${_data.password}');
   }
 }
  @override
  Widget build(BuildContext context) {
    MediaQueryData media = MediaQuery.of(context);

    final Size screenSize = media.size;
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('Login'),
      ),
      body: new Container(
          padding: new EdgeInsets.all(20.0),
          child: new Form(
            key: this._formKey,
            child: new ListView(
              children: <Widget>[
                new Container(
                    padding: new EdgeInsets.all(20.0),
                    child:new Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                     SizedBox(
                      height: 155.0,
                      child: Image.asset("assets/images/AashrayLogo.png",fit: BoxFit.cover,),
                      ),
                    ],
                  )
                ),
                new Container(
                  padding: const EdgeInsets.only(top: 10.0),
                  child: new TextFormField(
                      keyboardType: TextInputType.emailAddress, // Use email input type for emails.
                      decoration: new InputDecoration(
                        labelStyle: new TextStyle(
                          fontSize: 20.0
                        ),
                          hintText: 'you@example.com',
                          labelText: 'E-mail Address',
                          icon: new Icon(Icons.email)),
                      validator: this._validateEmail,
                      onSaved: (String value) {
                        this._data.email = value;
                      }

                      )
                  ),
                new Container(
                  padding: const EdgeInsets.only(top:10.0),
                  child:  new TextFormField(
                      obscureText: true, // Use secure text for passwords.
                      decoration: new InputDecoration(
                         labelStyle: new TextStyle(
                          fontSize: 20.0
                        ),
                          hintText: 'Password',
                          labelText: 'Enter your password',
                          icon: new Icon(Icons.lock)

                      ),
                      validator: this._validatePassword,
                      onSaved: (String value) {
                        this._data.password = value;
                      }
                  ),
                ),
                new Container(
                  width: screenSize.width,
                  child: new Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      new Container(
                        height:50.0,
                        margin: const EdgeInsets.only(left: 10.0,top: 30.0),
                        child: new RaisedButton(
                          child: new Text(
                            'Login',
                            style: new TextStyle(
                                color: Colors.white
                            ),
                          ),
                          onPressed: this._submit,
                          color: Colors.deepPurple,
                        ),

                      ),
                      new Container(
                        height:50.0,
                        margin: const EdgeInsets.only(left: 20.0,top: 30.0),
                        child: new RaisedButton(
                          child: new Text(
                            'Registration',
                            style: new TextStyle(
                                color: Colors.white
                            ),
                          ),
                          onPressed: _navigateRegistration,
                          color: Colors.deepPurple,
                        ),

                      )
                    ],
                  ),
                ),

              ],
            ),
          )
      ),
    );
  }
_navigateRegistration() {
    NavigationRouter.switchToRegistration(context);
  }

  
}