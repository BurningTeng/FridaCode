"use strict"

//console.log("burning");

// Java.perform(function () {
//     var targetClass = Java.use("com.example.myapplication.MainActivity");
//     targetClass.onCreate.implementation = function(p1){
//         console.log("burning onCreate");
//         this.onCreate(p1);
//     }
    
//   });

console.log("burning");
function frida_Java() {
    Java.perform(function () {

      // Java.choose("mtopsdk.mtop.domain.MethodEnum",{
      //   onMatch: function (instance){
      //     console.log("[*] "+" mtopsdk.mtop.domain.MethodEnum"+" :=> '"+instance+"'");
      //  //   console.log(Java.cast(instance,Java.use("android.bluetooth.BluetoothDevice") ).getName());
      //     console.log(instance);
      //   //  bluetoothDeviceInfo(instance);
      //   },
      //   onComplete: function() { console.log("[*] -----");}
      // });
        var targetClass_tb = Java.use("mtopsdk.mtop.domain.MethodEnum");
        var string = Java.use("java.lang.String");
        var obj_string = string.$new("post");
        var obj_int  = Java.use("java.lang.Integer").$new(12);

        console.log("obj_string:"+obj_string+obj_int);
        var constructors = targetClass_tb.class.getDeclaredConstructors();
        for (var i = 0;i < constructors.length;i++){
          console.log("无情剑客" + constructors[i]);
        }
        var constructor = constructors[0];
        console.log("无情剑客" + constructor);
        constructor.setAccessible(true);
        constructor.newInstance([obj_string, obj_int, obj_string]);

        // console.log("无情剑客" + constructor_convert);
        //   var targetClass = Java.use("com.example.myapplication.MainActivity");
        //   targetClass.stringFromJNI.implementation = function(){
        //     var result = this.stringFromJNI();
        //     console.log("burning result "+result);
        //     result = "欢迎关注我的微信公众号:无情剑客";
        //     return result;
        //   }

        //   var targetFunc = Module.getExportByName("libnative-lib.so", 'Java_com_example_myapplication_MainActivity_stringFromJNI');
        //   console.log("burning"+targetFunc);
        //   Interceptor.attach(targetFunc, {
        //     onEnter: function (args) {
        //         console.log(args[0]);
        //         console.log("burning Env"+JSON.stringify(Java.vm.getEnv()));

        //     },
        //     onLeave: function (retval) {
        //       console.log("retval "+retval.toString());
        //     }
        //   });

          // var openFunc = Module.getExportByName("libc.so", 'open');
          // console.log("burning"+openFunc);
          // Interceptor.attach(openFunc, {
          //   onEnter: function (args) {
          //       const bu = args[0];
          //       //const filePath = args[0].readUtf8String();
          //       args[0] = Memory.allocUtf8String("Hello world");
          //       console.log("Burning"+args[0].readUtf8String());
          //       args[0] = bu;
          //   },
          //   onLeave: function (retval) {
          //     //console.log("retval "+retval.toString());
          //   }
          // });

    });
  }       
  setImmediate(frida_Java,0);