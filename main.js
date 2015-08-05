// console.log("main.js: begin");
System.register(['cjsDependency.js'], function (_export) {
  console.log("main.js: inside System.register callback function");

  var cjsDependency;
  return {
    setters: [function (_cjsDependency) {
      cjsDependency = _cjsDependency['default'];
      console.log("main.js: inside cjsDependency setter function, typeof cjsDependency = " + (typeof cjsDependency));
    }],
    execute: function () {
      console.log("main.js: inside execute function, typeof cjsDependency = " + (typeof cjsDependency));
      cjsDependency(); // cjsDependency should be a function!
      _export('default', cjsDependency);
    }
  };
});
console.log("main.js: end");
