"use strict"

console.log("Burning")

Java.perform(function (){
    console.log("Hello world");
    var targetClass = Java.use("com.android.server.am.ActivityManagerService");
    var methods = targetClass.class.getDeclaredMethods();
    methods.forEach(function(s) {
        console.log(s);
    });

  });
