const username:string = 'DarkGabriel1991';

const sum = (a: number, b: number) => {
  return a + b;
}

sum(1, 2);

class Person {
  constructor(public age: number, public lastName: string) {}
}

const carlitos = new Person(31, 'Tovar');
carlitos.age;
