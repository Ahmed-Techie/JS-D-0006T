class Car{
    constructor(brand ,color){
        this.brand = brand; // key = value
        this.color = color; 
        
    }
    printcolor() {
        return this.color;
    }

    printcolor1(str) {
        return str+this.color;
      }
   
}
var test1 = new Car("Audi", "black");
var test2 = new Car("Audi", "white"); 
console.log(test1.brand, test1.color);
console.log(`the color of my car is ${test2.printcolor()}`);

var test = new Car("Audi", "black");
var result = test.printcolor1("the color of my car is ");
console.log(result);

/******************************************* */
// Q.1: Class - Movie.
/******************************************* */

class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

var film = new Movie("Casino Royale", "Eon Productions", "PG­13");
console.log(film.title, film.studio, film.rating);

// Q.2: Circle - Class.
/******************************************* */

class Circle {
    constructor(radius, color) { 
        this.radius = radius;
        this.color = color;
    }

    get radiusCircle() { 
        return this.radius; 
    }
    get colorCircle() { 
        return this.color; 
    }

    set radiusCircle(radius) { 
        this.radius = radius; 
    }
    set colorCircle(color) { 
        this.color = color; 
    }

    get toString() {
        return `"Circle[radius=${this.radius}, color=${this.color}()]"`;
    }

    get areaCircle() {
        return Math.PI * this.radius * this.radius;
      }
      get circumferenceCircle() {
        return 2 * Math.PI * this.radius;
      }


}

var obj1 = new Circle(1.0, "red");
console.log(obj1.radiusCircle); 
obj1.radiusCircle=2.2
console.log(obj1.radiusCircle);




/******************************************* */

//Q.3: Write a "person" class to hold all the details.
/******************************************* */
class Person {
    constructor(name, age, salary, gender) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.gender = gender;

    }
}

var pt = new Person("Ahmed", 31, "1C", "Male");
console.log(pt.name, pt.age, pt.salary, pt.gender);
/******************************************* */

// Q.4: Write a class to calculate the Uber price.
/******************************************* */
class Uberprice {
    constructor(priceperkilometer, totalkilometer) {
        this.priceperkilometer = priceperkilometer;
        this.totalkilometer = totalkilometer;
    }

}

var amount = new Uberprice(12, 10);
console.log(amount.priceperkilometer * amount.totalkilometer);
/*************************End-Question************************ */
