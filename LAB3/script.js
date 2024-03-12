var car1 = new Object();
car1.color = "red";
car1.maxSpeed = 90;
car1.driver = new Object();
car1.driver.name = "Vlad Karanevych";
car1.driver.category = "C";
car1.driver.personalLimitations = "No driving at night";
car1.tuning = true;
car1.numberOfAccidents = 0;

var car2 = {
  color: "blue",
  maxSpeed: 130,
  driver: {
    name: "Vlad Karanevych",
    category: "B",
    personalLimitations: null,
  },
  tuning: false,
  numberOfAccidents: 2,
};

car1.drive = function () {
  console.log("I am not driving at night");
};

car1.drive();

car2.drive = function () {
  console.log("I can drive anytime");
};

car2.drive();

function Truck(color, weight, avgSpeed, brand, model) {
  this.color = color;
  this.weight = weight;
  this.avgSpeed = avgSpeed;
  this.brand = brand;
  this.model = model;
}

Truck.prototype.AssignDriver = function (name, nightDriving, experience) {
  this.driver = {
    name: name,
    nightDriving: nightDriving,
    experience: experience,
  };
};

var myTruck = new Truck("White", 5000, 80, "Mercedez", "1");

myTruck.AssignDriver("Vlad Karanevych", true, 5);

console.log(myTruck);

Truck.prototype.trip = function () {
  if (!this.driver) {
    console.log("No driver assigned");
  } else {
    let message = "Driver " + this.driver.name;
    message += this.driver.nightDriving
      ? " drives at night"
      : " does not drive at night";
    message += " and has " + this.driver.experience + " years of experience";
    console.log(message);
  }
};

var truck1 = new Truck("White", 6600, 80, "Mercedez", "1");
var truck2 = new Truck("Green", 4900, 80, "Mercedez", "2");

truck1.AssignDriver("Vlad Vlad", true, 3);
truck2.AssignDriver("Karanevych Karanevych", false, 10);

truck1.trip();
truck2.trip();

/////////// Part 2 ////////////////

class Square {
  constructor(a) {
    this.a = a;
  }

  static help(params) {
    console.log(`Квадрат. Всі сторони рівні`);
  }

  length() {
    return this.a * 4;
  }

  square() {
    return this.a * this.a;
  }

  info() {
    console.log(`Довжина всіх 4 сторін - ${this.a} `);
    console.log(`Величини всіх 4 кутів - 90 `);
    console.log(`Сума довжин сторін - ${this.length()} `);
    console.log(`Площа - ${this.square()} `);
  }
}

class Rectangle extends Square {
  constructor(a, b) {
    super(a);
    this.b = b;
  }

  static help(params) {
    console.log(`Прямокутник. Протилежні сторони рівні`);
  }

  length() {
    return 2 * (this.a + this.b);
  }

  square() {
    return this.a * this.b;
  }

  info() {
    console.log(`Довжина - ${this.a} `);
    console.log(`Ширина - ${this.b} `);
    console.log(`Величини всіх 4 кутів - 90 `);
    console.log(`Сума довжин сторін - ${this.length()} `);
    console.log(`Площа - ${this.square()} `);
  }
}

class Rhombus extends Square {
  constructor(a, alpha, beta) {
    super(a);
    this.alpha = alpha;
    this.beta = beta;
  }

  get a() {
    return this._a;
  }

  set a(newA) {
    if (newA > 0) {
      this._a = newA;
    } else {
      console.log("Сторона повинна бути додатньою");
    }
  }

  get alpha() {
    return this._alpha;
  }

  set alpha(newAlpha) {
    if (newAlpha >= 0 && newAlpha <= 180) {
      this._alpha = newAlpha;
    } else {
      console.log("Кут повинен бути в межах від 0 до 180 градусів");
    }
  }

  get beta() {
    return this._beta;
  }

  set beta(newBeta) {
    if (newBeta >= 0 && newBeta <= 180) {
      this._beta = newBeta;
    } else {
      console.log("Кут повинен бути в межах від 0 до 180 градусів");
    }
  }

  static help() {
    console.log(`Ромб. Усі сторони рівні, протилежні кути рівні.`);
  }

  length() {
    return 4 * this.a;
  }

  square() {
    return this.a * this.a * Math.sin(this.alpha * (Math.PI / 180));
  }

  info() {
    console.log(`Сторона ромба - ${this.a}`);
    console.log(`Кут 1 ромба - ${this.alpha} градусів`);
    console.log(`Кут 2 ромба - ${this.beta} градусів`);
    console.log(`Сума довжин сторін ромба - ${this.length()}`);
    console.log(`Площа ромба - ${this.square()}`);
  }
}

class Parallelogram extends Rectangle {
  constructor(a, b, alpha, beta) {
    super(a, b);
    this.alpha = alpha;
    this.beta = beta;
  }

  static help() {
    console.log(`Паралелограм. Протилежні сторони та кути рівні.`);
  }

  length() {
    return 2 * (this.a + this.b);
  }

  square() {
    return this.a * this.b * Math.sin(this.alpha * (Math.PI / 180));
  }

  info() {
    console.log(`Довжина паралелограма - ${this.a}`);
    console.log(`Ширина паралелограма - ${this.b}`);
    console.log(`Кут 1 паралелограма - ${this.alpha} градусів`);
    console.log(`Кут 2 паралелограма - ${this.beta} градусів`);
    console.log(`Сума довжин сторін паралелограма - ${this.length()}`);
    console.log(`Площа паралелограма - ${this.square()}`);
  }
}

Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

const mySquare = new Square(5);
console.log(`Інформація про квадрат:`);
console.log(mySquare.info());

const myRectangle = new Rectangle(4, 7);
console.log(`Інформація про прямокутник:`);
myRectangle.info();

const myRhombus = new Rhombus(6, 100, 80);
console.log(`Інформація про ромб:`);
myRhombus.info();

const myParallelogram = new Parallelogram(5, 6, 100, 80);
console.log(`Інформація про паралелограм:`);
myParallelogram.info();

///// Part 3 ///////

function Triangular(a = 3, b = 4, c = 5) {
  if (a + b > c && a + c > b && b + c > a) {
    return { a, b, c };
  } else {
    console.log("Не існує");
    return null;
  }
}

const t1 = Triangular();
const t2 = Triangular(3, 6, 8);
const t3 = Triangular(7, 9, 11);

console.log(t1);
console.log(t2);
console.log(t3);

function PiMultiplier(factor) {
  return function () {
    return Math.PI * factor;
  };
}

const mul2 = PiMultiplier(2);
const mul32 = PiMultiplier(3 / 2);
const div2 = PiMultiplier(1 / 2);

console.log(mul2());
console.log(mul32());
console.log(div2());

function Painter(color) {
  return function (obj) {
    if (obj.type) {
      console.log(`Color - ${color}, Type - ${obj.type}`);
    } else {
      console.log(`Color - ${color}, No 'type' property occurred!`);
    }
  };
}

const PaintBlue = Painter("blue");
const PaintRed = Painter("red");
const PaintYellow = Painter("yellow");

const object1 = { maxSpeed: 280, type: "Sportcar", color: "magenta" };
const object2 = { type: "Truck", avgSpeed: 90, loadCapacity: 2400 };
const object3 = { maxSpeed: 180, color: "purple", isCar: true };

PaintBlue(object1);
PaintRed(object2);
PaintYellow(object3);
