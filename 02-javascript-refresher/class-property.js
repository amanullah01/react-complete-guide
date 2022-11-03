class Person {
  myName = "Amanullah Aman";

  printMyName = () => console.log(this.myName);
}

const person = new Person();
person.printMyName();
