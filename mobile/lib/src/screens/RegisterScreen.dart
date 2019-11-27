  
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_datetime_picker/flutter_datetime_picker.dart';
//import '../utils//router.dart';


class RegistrationScreen extends StatefulWidget {
  @override
  _RegistrationScreenState createState() => new _RegistrationScreenState();
}

class _RegistrationScreenState extends State<RegistrationScreen> {
   String _date = "Not set";
   bool _isChecked = false;
   
   @override
  void initState() {
    super.initState();
  }
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('Registration'),
      ),
      body: new Container(
          padding: new EdgeInsets.all(20.0),

          child: new Form(

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
                        keyboardType: TextInputType.text, // Use email input type for emails.
                        decoration: new InputDecoration(
                           labelStyle: new TextStyle(
                          fontSize: 20.0
                        ),
                          hintText: 'User Name',
                          labelText: 'Enter your user name',
                          icon: new Icon(Icons.person),
                        )

                    )
                ),
                new Container(
                   padding: const EdgeInsets.only(top: 10.0),
                   child: new  RaisedButton(
                     shape: RoundedRectangleBorder(
                     borderRadius: BorderRadius.circular(5.0)),
                     elevation: 4.0,
                     onPressed: () {
                       DatePicker.showDatePicker(context,
                       theme: DatePickerTheme(
                        containerHeight: 210.0,
                       ),
                      showTitleActions: true,
                      minTime: DateTime(1980, 1, 1),
                      maxTime: DateTime(2012, 12, 31), 
                      onConfirm: (date) {
                        print('confirm $date');
                        _date = '${date.year} - ${date.month} - ${date.day}';
                        setState(() {
                          _date = _date;
                        }
                      );
                    },
                   ); 
                 },
                  child: Container(
                    alignment: Alignment.center,
                    height: 50.0,
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: <Widget>[
                      Row(
                        children: <Widget>[
                          Container(
                            child: Row(
                              children: <Widget>[
                                Icon(
                                  Icons.date_range,
                                  size: 24.0,
                                  color: Colors.teal,
                                ),
                                Text(
                                  " $_date",
                                  style: TextStyle(
                                      color: Colors.teal,
                                      fontWeight: FontWeight.bold,
                                      fontSize: 18.0),
                                ),
                              ],
                            ),
                          )
                        ],
                      ),
                      Text(
                        "  Enter D.O.B",
                        style: TextStyle(
                            color: Colors.teal,
                            fontWeight: FontWeight.bold,
                            fontSize: 18.0),
                      ),
                    ],
                  ),
                ),
              ),
            ),
               
                 new Container(
                    padding: const EdgeInsets.only(top: 10.0),
                    child: new TextFormField(
                        keyboardType: TextInputType.phone, // Use email input type for emails.
                        decoration: new InputDecoration(
                           labelStyle: new TextStyle(
                          fontSize: 20.0
                        ),
                            hintText: '9634349532',
                            labelText: 'Enter Phone Number',
                            icon: new Icon(Icons.email))

                    )
                ),

                new Container(
                   padding: const EdgeInsets.only(top: 10.0),
                   child: new Container(
                      alignment: Alignment.center,
                      height: 50.0,
                      child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: <Widget>[
                      Row(
                        children: <Widget>[
                          Container(
                            child: Row(
                              children: <Widget>[
                                Checkbox(
                                 value: _isChecked,
                                 onChanged: (value){
                                   setState(() {
                                     _isChecked = value;
                                   });
                                 } 
                                ),
                                Text(
                                  "  Part of Organisation ? ",
                                  style: TextStyle(
                                      fontSize: 20.0),
                                ),
                              ],
                            ),
                          )
                        ],
                      ),
                     ]
                    )
                   )
                ),
                new Container(
                  child: Row(
                    children: <Widget>[
                      _isChecked ? new Container(
                           padding: const EdgeInsets.only(top: 10.0),
                           child: new TextFormField(
                           keyboardType: TextInputType.text, // Use email input type for emails.
                           decoration: new InputDecoration(
                           labelStyle: new TextStyle(
                              fontSize: 20.0
                            ),
                           hintText: 'you@example.com',
                           labelText: 'E-mail Address',
                           icon: new Icon(Icons.shop))
                          )
                      ): SizedBox(),
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
                            icon: new Icon(Icons.email))

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

                      )
                  ),
                ),
                new Container(
                  padding: const EdgeInsets.only(top:10.0),
                  child:  new TextFormField(
                      obscureText: true, // Use secure text for passwords.
                      decoration: new InputDecoration(
                         labelStyle: new TextStyle(
                          fontSize: 20.0
                        ),
                          hintText: 'Confirm Password',
                          labelText: 'Enter your confirm password',
                          icon: new Icon(Icons.lock)

                      )
                  ),
                ),
                new Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    new Container(
                      height:50.0,
                      width: 210.0,
                      margin: const EdgeInsets.symmetric(horizontal: 20.0,vertical: 40.0),
                      child: new RaisedButton(
                        child: new Text(
                          'Register',
                          style: new TextStyle(
                              color: Colors.white
                          ),
                        ),
                        onPressed: () => _performLogin(),
                        color: Colors.deepPurple,
                      ),

                    ),

                  ],
                ),

              ],
            ),
          )
      ),
    );
  }

  _performLogin() {

  }

  //_navigateRegistration() {
    //NavigationRouter.switchToRegistration(context);
  //}
}

