class Gender {
  gender = "male";

  printGender = () => console.log(this.gender);
}

class Person extends Gender {
  myName = "Amanullah Aman";

  printMyName = () => console.log(this.myName);
}

const person = new Person();
person.printMyName();
person.printGender();
