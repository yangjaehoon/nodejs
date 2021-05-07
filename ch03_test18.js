function Person(name,age) {
    this.name = name;
    this.age = age;
}

Person.prototype.walk = function(speed) {
    console.log(speed + 'km 속도로 걸어갑니다.');
}

var Person01 = new Person('소녀시대', 20);
var Person02 = new Person('걸스데이', 22);

console.log(Person.name + '객체의 walk(10)을 호출 합니다. ');
Person01.walk(10);