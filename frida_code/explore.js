"use strict"

Interceptor.attach(ptr('0x55640cf20169'),{
    onEnter:function(args){
        
        args[0] = ptr('0x100');
    }
})

// Interceptor.replace(Module.getExportByName(null,'sleep'), new NativeCallback((int) =>{
//     Thread.sleep(10)
// }
// ,'uint',['uint'])
// )
// var fn = new NativeFunction(ptr('0x564c2da7b169'),'int',['uint']);
// fn(1000);
// fn(1000);
// fn(1000);
// fn(1000);
// fn(1000);
// fn(1000);
// Java.perform(function(){
//     const wm = new Object();
//     // let obj = { b: 2 };
//     // wm.set(obj, '2');
//     // obj = null;
//      gc();
//     var id = WeakRef.bind(wm, function(){
//         console.log("finish gc");
//         WeakRef.unbind(id);
//     }
// )
// })
