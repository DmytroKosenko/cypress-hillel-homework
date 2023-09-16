class User {
  arms = 2;
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log("hello");
  }

  get getName() {
    return this.name;
  }

  setName(value) {
    if (value.length < 5) {
      console.log("please, filol only letters");
      return;
    }
    this._name = value;
  }
}

//class type
//console.log(typeof User);

//call class method by using 'new' word
//new User().sayHello();

//assign class to variable and call method
//const user_2 = new User();
//user_2.sayHello();

//console.log(user_2.arms);

let user_3 = new User("Birdss");
let nameB = user_3.getName;
console.log(nameB);
