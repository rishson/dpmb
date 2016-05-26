var _ = require('lodash');

function main(){

  function goodCheck(a, b){
    return a === b;
  }

  function badCheck(a, b){
    return a == b;
  }

  var isSame = badCheck(10, 20);
  var isSameAgain = goodCheck(10, 20);
  console.log(isSame);

  function doSomething(){
    //TODO make this do something
    console.log('i dont really do alot :-(');
  }

  var x = add(1,2);
  var y = add(15,2);

  // TODO implement add with as many JS gotchas as possible
  function add(x, y) {
    var first = x;
    var second = y;
    result === first + second;

    return
      result === foo;
  }
}
main();













