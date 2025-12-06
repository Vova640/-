const person = { name: 'John', age: 23, city: 'Boston' };

Object.defineProperty(person, 'birthYear', {
  get() { return new Date().getFullYear() - this.age; },
  enumerable: true
});

console.log(person.birthYear);
