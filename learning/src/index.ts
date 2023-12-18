// if (true) {
//     const myNumber = (num: number): number => num
//     console.log(myNumber(10));
// }


// let myFavNum: number = 10
// console.log(myFavNum.toString())
// let sum = myFavNum + 10
// console.log(sum);
// console.log(typeof sum);



// function isEven(num: number): boolean {
//     return num % 2 === 0
// }
// console.log(isEven(6));



// function isDivisibleBy4And8(num: number): boolean {
//     return num % 4 === 0 && num % 8 === 0
// }
// console.log(isDivisibleBy4And8(16));



// let bigNumber: bigint = 9007199254740992n;
// console.log(bigNumber);

// let anotherBigNumber: bigint = BigInt("90071992547409923")
// console.log(anotherBigNumber);

// let maxNumber = Number.MAX_SAFE_INTEGER
// // let maxNumber = (Number as any).MAX_SAFE_INTEGER                // type casting or type assertion
// console.log(maxNumber);



// const isPalindrome = (palindrome: string): boolean => {
//     let myPalin = palindrome.split('').reverse().join('')
//     return myPalin === palindrome
// }
// console.log(isPalindrome('12321'))



// const greet = (param: string): string => {
//     return `Hello, ${param}`
// }
// console.log(greet('good night'))



// const person: {
//     name: string;
//     age: number;
//     isStudent: boolean;
//     address: {
//         city: string;
//         country: string;
//     }
// } = {
//     name: 'Girraj',
//     age: 21,
//     isStudent: true,
//     address: {
//         city: 'Bhopal',
//         country: 'India'
//     }
// }
// console.log(person.address.country);



// type Student = {
//     name: string;
//     age: number;
//     gender?: string;
//     greet: (country: string) => string;           // function call signature
// }

// const student1: Student = {
//     name: 'Girraj',
//     age: 21,
//     greet: (country) => `i am from ${country}`
// }

// const student2: Student = {
//     name: 'Dhananjay',
//     age: 15,
//     greet: (country) => `welcome, my name is ${student2.name} & i am from ${country}`
// }

// const introduction = (student1: Student): string => {
//     const { name, age } = student1;
//     return `welcome, i am ${name} and i am ${age} years old`;
// }

// console.log(introduction(student1));
// console.log(student1.greet('india'));
// console.log(student2.greet('india1'));



// type Student = {
//     (country: string): string;                   // pure function call signature
//     age: number
// }

// const student3: Student = (country) => `Hello, this is pure function call signature, ${country} and age ${student3.age}`;
// student3.age = 21
// console.log(student3('india2'));



// async function fetchData(): Promise<unknown> {                                   // generics concept
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//     const data = await response.json();
//     return data;
// }

// async function processData() {
//     const res = await fetchData();
//     console.log(res);
// }
// processData();



// function calculateAverage(param: number[]): number {
//     const sum: number = param.reduce((acc: number, curr: number): number => acc + curr, 0);
//     const average: number = sum / param.length;
//     return average
// }
// console.log(calculateAverage([10, 10, 10, 10]));



// function findMaxValue(param: number[]): number {
//     const maxVal: number = param.reduce((acc: number, curr: number): number => curr > acc ? curr : acc, 0)
//     return maxVal
// }
// console.log(findMaxValue([50, 10, 15, 20]));



// const message = 'Hello, TypeScript';
// console.log(typeof message);



// function calculateArea(length: number, width: number) {
//     return length * width;
// }
// console.log(typeof calculateArea(10, 5));



// const names: string[] = ['Girraj', 'Kushwah', 'Dhananjay'];
// const upper: string[] = names.map((elem: string): string => elem.toUpperCase());
// console.log(upper);



// const numbers: number[] = [2, 4, 6, 8];
// const squareNum: number[] = numbers.map((elem: number): number => elem * elem);
// console.log(squareNum);



// const myArray: string[] = ['india', 'abc', 'abcd', 'indian'];
// const newArray: string[] = myArray.filter((elem: string): boolean => elem.length > 4);
// console.log(newArray);



// const names: string[] = ['Alice', 'Bob', 'Anna', 'Andrew', 'Alex'];
// const result: string[] = names.filter((elem: string): boolean => elem[0] === 'A');
// console.log(result);



// const product: {
//     name: string;
//     price: string;
//     quantity: number;
// } = {
//     name: 'HP 15S',
//     price: 'Rs. 50,000',
//     quantity: 10
// }
// console.log(product.name);
// console.log(product.price);
// console.log(product.quantity);



// type ProductInfo = readonly [string, number, number];
// const Product1: ProductInfo = ['apple', 80, 50];
// const Product2: ProductInfo = ['orange', 40, 60];

// const displayInfo = (product: ProductInfo): void => {
//     const [name, price, quantity] = product;
//     console.log(`name is ${name}, price is ${price} and quantity is ${quantity}`);
// }
// displayInfo(Product1);
// displayInfo(Product2);



// type User = {
//     name: string;
//     email: string;
// }
// type Account = {
//     accountId: number;
//     accountType: string;
//     balance: number;
// }
// const myUser: User = {
//     name: 'Girraj',
//     email: 'test@mail.com'
// }
// const myAccount: Account = {
//     accountId: 9876543210,
//     accountType: 'savings',
//     balance: 1000
// }

// const combineUserAndAccount = (user: User, account: Account): User & Account => {
//     return { ...user, ...account };
// }
// console.log(combineUserAndAccount(myUser, myAccount));



// class Person {
//     public name: string;
//     public age: number;
//     public hobbies: string[];
//     public introduce(): string {
//         return `Hello World`;
//     }
//     constructor(name: string, age: number, hobbies: string[]) {
//         this.name = name;
//         this.age = age;
//         this.hobbies = hobbies;
//     }
// }
// const person1: Person = new Person('Girraj', 21, ['reading', 'painting']);
// console.log(person1);
// console.log(person1.introduce());



// shorthand property for working with classes -

// class Person {
//     introduce(): string {
//         return `Hello World`;
//     }
//     constructor(public name: string, public age: number, public hobbies: string[]) { }
// }
// const person1: Person = new Person('Girraj', 21, ['reading', 'painting']);
// console.log(person1);
// console.log(person1.introduce());



// class Person {
//     introduce(): string {
//         return `Hello World`;
//     }
//     constructor(public name: string, public age: number, public hobbies: string[]) { }
// }
// class Teacher extends Person {
//     // public grade: number;
//     constructor(name: string, age: number, hobbies: string[], public grade: number) {
//         super(name, age, hobbies);
//         this.grade = grade;
//     }
//     introduceMe(): string {
//         console.log(super.introduce());
//         return `i am ${this.name} and my age is ${this.age} and my hobbies - ${this.hobbies} and grade is ${this.grade}`;
//     }
// }
// const teacher: Teacher = new Teacher('Girraj', 21, ['teaching', 'coding'], 80);
// console.log(teacher);
// console.log(teacher.introduce());
// console.log(teacher.introduceMe());



// age validation is only done at the time of instance creation only

// class Person {
//     introduce(): string {
//         return `age is ${this.age}`;
//     }
//     constructor(public name: string, public age: number, public hobbies: string[]) {
//         if (this.age > 150 || this.age < 0) throw new Error('invalid age');
//     }
// }
// const person1: Person = new Person('Girraj', 21, ['study', 'coding']);
// person1.age = 500;
// console.log(person1.introduce());



// class Person {
//     private _age: number | undefined;
//     introduce(): string {
//         return `age is ${this._age}`;
//     }
//     constructor(public name: string, public hobbies: string[]) { }
//     public set age(age: number) {
//         if (age > 150 || age < 0) throw new Error('invalid age');
//         this._age = age
//     }
//     public get age(): number {
//         if (this._age === undefined) throw new Error('age is not defined');
//         else return this._age;
//     }
// }
// const person1: Person = new Person('Girraj', ['singing', 'dancing']);
// person1.age = 21;
// console.log(person1.introduce());
// console.log(person1.age);



// class MathOperations {
//     public static PI: number = Math.PI;
//     public static add(num1: number, num2: number): number {
//         return num1 + num2;
//     }
// }
// console.log(MathOperations.PI);
// console.log(MathOperations.add(5, 10));.



// abstract class Shape {
//     constructor(protected color: string) { }
//     abstract calculateArea(): number;
//     abstract displayArea: () => void;
//     greet(): string {
//         return `Hello World`
//     };
// }
// class Circle extends Shape {
//     constructor(color: string, protected radius: number) {
//         super(color)
//     }
//     public calculateArea(): number {
//         return Math.PI * this.radius * this.radius;
//     }
//     public displayArea = (): void => {
//         console.log(`this is ${this.color} and circle with radius ${this.radius}`)
//     };
// }
// const circle = new Circle('orange', 5);
// console.log(circle.calculateArea());
// circle.displayArea();
// console.log(circle.greet());



// const favHobbies = (hobby: string | string[]): string | string[] => {
//     if (typeof hobby === 'object' && Array.isArray(hobby)) {
//         return hobby.map((elem: string): string => `${elem}-edited`);
//     } else {
//         return hobby;
//     }
// }
// console.log(favHobbies('coding'));
// console.log(favHobbies(['coding', 'cricket']));



// class BankAccount {
//     private _balance: number = 0;
//     public get balance(): number {
//         return this._balance;
//     }
//     public set balance(newBal: number) {
//         if (newBal < 0) throw new Error('invalid balance');
//         else this._balance = newBal;
//     }
// }
// const account: BankAccount = new BankAccount();
// account.balance = 10;
// console.log(account.balance);



// class Temperature {
//     private _celcius: number = 0;
//     public get celcius(): number {
//         return this._celcius
//     }
//     public set celcius(newCelcius: number) {
//         this._celcius = newCelcius;
//     }
//     public get fahrenheit(): number {
//         return (this._celcius * 9) / 5 + 32;
//     }
//     public set fahrenheit(newFahrenheit: number) {
//         this._celcius = ((newFahrenheit - 32) * 5) / 9;
//     }
// }
// const temp: Temperature = new Temperature();
// temp.celcius = 25;
// console.log(temp.fahrenheit);
// temp.fahrenheit = 77
// console.log(temp.celcius);



// namespace UserUtils {
//     export class Users {
//         getName(): string {
//             return 'hello';
//         }
//     }
// }
// let user1: UserUtils.Users = new UserUtils.Users();
// console.log(user1.getName());



// let s1: symbol = Symbol('d1');
// console.log(s1);
// let data = {
//     s1: 'somedata'
// };
// console.log(data.s1);
// let data2 = {
//     [s1]: 'somedata'
// };
// console.log(data2[s1]);

// let demoF1: symbol = Symbol('d1');
// class Demo {
//     [demoF1](): string {
//         return 'something';
//     }
// }
// let d1: Demo = new Demo();
// console.log((d1 as any)[demoF1]());



// console.log();
