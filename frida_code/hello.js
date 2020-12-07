"use strict"

var app = new ModuleMap(isAppAddress);

var result = Process.enumerateThreads();
result.forEach(function(thread){
  Stalker.follow(thread.id, {
    // events: {
    //   call: true, // CALL instructions: yes please
  
    //   // Other events:
    //   ret: true, // RET instructions
    //   exec: false, // all instructions: not recommended as it's
    //                //                   a lot of data
    //   block: false, // block executed: coarse execution trace
    //   compile: false // block compiled: useful for coverage
    // },

  // onReceive: Called with `events` containing a binary blob
  //            comprised of one or more GumEvent structs.
  //            See `gumevent.h` for details about the
  //            format. Use `Stalker.parse()` to examine the
  //            data.
  //
    // onReceive: function (events) {
    //   var parsedEvent = Stalker.parse(events);
    //   console.log("burning "+parsedEvent);
    // },
    transform: function (iterator) {
      let instruction = iterator.next();
      
      // const startAddress = instruction.address;
      // const isAppCode = startAddress.compare(appStart) >= 0 &&
      //     startAddress.compare(appEnd) === -1;
  
      // do {
      //   if (isAppCode && instruction.mnemonic === 'ret') {
      //     iterator.putCmpRegI32('eax', 60);
      //     iterator.putJccShortLabel('jb', 'nope', 'no-hint');
      
      //     iterator.putCmpRegI32('eax', 90);
      //     iterator.putJccShortLabel('ja', 'nope', 'no-hint');
      
      //     iterator.putCallout(onMatch);
      
      //     iterator.putLabel('nope');
      //   }
      
      //   iterator.keep();
      // } while ((instruction = iterator.next()) !== null);

      do{
        console.log("instruction: "+instruction);
        iterator.keep();

      } while((instruction = iterator.next() != null));
    }
  });
});

function isAppAddress(module){
  return module.path.indexOf("hello") != -1;
}