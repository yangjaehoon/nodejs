var calc = require('./calc');
console.log('모듈을 분리한 후 - calc.add 함수 호출 결과 : %d', calc.add(10,10));

var calc = require('./calc2');
console.log('모듈을 분리한 후 - calc2.add 함수 호출 결과 : %d', calc.add(10,10));