//1)a) Write a constructor for the class Movie, which takes a String representing the title of the movie, 
//a String representing the studio, and a String representing the rating as its arguments, 
//and sets the respective class properties to these values:
//b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
class movie{
    constructor(title,studio,rating="PG"){
        this.title=title
        this.studio=studio
        this.rating=rating
    }
//c) Write a method getPG, which takes an array of base type Movie as its argument, 
//and returns a new array of only those movies in the input array with a rating of "PG". 
//You may assume the input array is full of Movie instances. The returned array need not be full.
    print_rating(){
        return `The rating of the movie is ${this.rating}`
    }
}
//d)Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, 
//and the rating “PG­13”
    var movie1 = new movie("Casino Royale","Eon Productions","PG13")
    var movie2 = new movie("Casino Royale","Eon Productions")
    console.log(movie1.title)
    console.log(movie1.studio)
    console.log(movie1.print_rating())
    console.log(movie2.rating)

//2)Convert the UML diagram to Typescript class. - use number for double
class circle{
    constructor(radius,color){
        this.radius=radius
        this.color=color
    }
    get areaCircle(){
        return 2*Math.PI*this.radius*this.radius
    }
    get circumferenceCircle(){
        return 2*Math.PI*this.radius
    }
    get radiusCircle(){
        return this.radius
    }
    get colorCircle(){
        return this.color
    }
}
class Person{
    constructor(name,age,gendre,Dob,location)
    {
        this.name = name;
        this.age = age;
        this.gendre = gendre;
        this.Dob = Dob
        this.location = location;
    }
}
var person1 = new Person1("Priyanka", 23 , "Female", "1-07-2001" , "Chennai");
console.log(person1.name);
console.log(person1.age);
console.log(person1.gendre);
console.log(person1.Dob);
console.log(person1.location);

//write a class to calculate the Uber price
class Customer{
    constructor(priceperKM, Kilometer){
        this.priceperKM = priceperKM;
        this.Kilometer = Kilometer;
    }
    get Uberprice(){
        return this.priceperKM * this.Kilometer;
    }
}
var customer1 = new Customer(18,10)
var customer2 = new Customer(18,45)
console.log(customer1.Uberprice)
console.log(customer2.Uberprice)