console.log("cjsDependency.js: begin");
// System.registerDynamic is documented here:
// https://github.com/systemjs/systemjs/blob/master/docs/system-api.md#systemregisterdynamicname--deps-executingrequire-declare
System.registerDynamic([/* Common JS module with no dependency */], true, function(require, exports, module) {
  console.log("cjsDependency.js: inside registerDynamic callback function");
  var myFunction = function() {
    console.log("cjsDependency.js: inside exported function");
  };
  module.exports = myFunction;
});
console.log("cjsDependency.js: end");
