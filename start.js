console.log("start.js: begin");
System.import("main.js").then(function(main) {
  console.log("start.js: inside System.import('main.js') callback function, main = " + (typeof main));
});
console.log("start.js: end");
