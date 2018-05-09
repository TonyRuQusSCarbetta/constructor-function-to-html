//CONSTRUCTOR PRACTICE

// //Basic Version
//
// //array to push to
// var restaurants = [];
//
// //Constructor Function
// function Restaurant(name, seats, cuisine, avgPrice, rating) {
//     this.name = name;
//     this.seats = seats;
//     this.cuisine = cuisine;
//     this.avgPrice = avgPrice;
//     this.rating = rating;
//
//     restaurants.push(this);
// }
//
// //Instead of storing each new restaraunt into a varialbe,
// //we are pushing each new restaraunt into an array.
// new Restaurant('Olive Garden', 50, 'italian', '$20', 4.5);
// new Restaurant('Popeyes Chicken', 37, 'chicken', '$10', 3.9);
// new Restaurant('Panda Express', 12, 'chinese', '$8', 3.2);

//---------------------------------------------------------------

//Complex Version

//array to push to
var restaurants = [];

//Constructor Function
function Restaurant(name, seats, cuisine, avgPrice, rating, array, bgImage) {
    //keyword this is referring to this new restaraunt we are creating
    this.name = name;
    this.seats = seats;
    this.cuisine = cuisine;
    this.avgPrice = avgPrice;
    this.rating = rating;
    this.bgImage = bgImage;

    populateHTML(this);

    //now we are calling the function we created below, the parameter restaurants is the array & the item parameter is the new Restaurant we are creating
    pushToArray(restaurants, this)
}
//created new function to push to Array (cleaner code)
function pushToArray(array, item) {
  array.push(item);
}

function populateHTML(object,) {
 var myDiv = document.createElement('div');
 var myH1 =  document.createElement('h1');
 var myH4 = document.createElement('h4');
 var myP = document.createElement('p');

 myDiv.appendChild(myH1);
 myDiv.appendChild(myH4);
 myDiv.appendChild(myP);

 myDiv.className = 'bg-dark text-light p-5 mb-5 col-12 col-sm-5 mx-auto';

myDiv.setAttribute('style','min-height: 300px; background-repeat: no-repeat; background-size: cover; background-image: url(' + object.bgImage + ');');

myDiv.setAttribute('onclick', 'removeBgImage()');

 myH1.innerText = object.name;
 myH4.innerText = object.cuisine;
 myP.innerText =  'Price: ' + object.price + ', Rating: ' + object.rating;

document.getElementsByClassName('row')[0].appendChild(myDiv);

}

//Instead of storing each new restaraunt into a varialbe,
//we are pushing each new restaraunt into an array.
new Restaurant('Olive Garden', 50, 'italian', '$20', 4.5, restaurants, 'https://www.foodnewsfeed.com/sites/foodnewsfeed.com/files/styles/fnf_rect/public/feature-images/darden-scale-back-olive-garden-promotions-including-buy-one-take-one-deal.jpg');
new Restaurant('Popeyes Chicken', 37, 'chicken', '$10', 3.9, restaurants, 'http://www.nolaweekend.com/wp-content/uploads/2017/09/popeyes-3.jpg');
new Restaurant('Panda Express', 12, 'chinese', '$8', 3.2, restaurants, 'https://i.pinimg.com/originals/a2/5a/b3/a25ab37a676df25d5dd01ffbc900ef7e.gif');
new Restaurant ('Pho', 62, 'vietnamese', '$9.25', 2.8, restaurants, 'http://cdn-image.myrecipes.com/sites/default/files/styles/medium_2x/public/roast-turkey-pho-ck.jpg?itok=lzZ5fPwL');

function removeBgImage() {
  var divs = document.getElementsByTagName('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.backgroundImage = "";
  }
}





//-------------------------------------------------------------------
//Example #1 (used for PROTOTYPES section)
//WITH IMMEDIATLEY INVOKED FUNCTION (iife)
function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.fullName = (function (x,y) {
    return x + " " + y;})
    (this.firstName, this.lastName)
}

var marilou = new Person('Marilou', 'Carbetta');
var kingston = new Person('Kingston', 'Thouchalanh');
//They don't have to all be stored in varialbes, instead...
//We can make an array of these.
var people = [
  new Person('Zion', 'Dizon'),
  new Person('Dominique', 'Dizon'),
  new Person('Cora', 'Blanco')
]
//-------------------------------------------------------------------
//PROTOTYPES
//like creating an entirely new class of data type in javacscript, we created a person data type which has a unique method called getFullName() which you can execute on ANY Person data type/method imaginable, even though we don't see it if we inspect ...
//PROTOTYPAL INHERITANCE
Person.prototype.getFullName = function () {
                return this.firstName + ' ' + this.lastName;
              };

Person.prototype.getFormalName = function () {
                return `${this.lastName}, ${this.firstName}`;
            };

//-------------------------------------------------------------------
