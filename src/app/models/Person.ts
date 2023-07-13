export class Person {
  Id: number | undefined;
  Name: String | undefined;
  Age: number | undefined;

  constructor(id: number, name: String, age: number) {
    this.Id = id;
    this.Name = name;
    this.Age = age;
  }
}
