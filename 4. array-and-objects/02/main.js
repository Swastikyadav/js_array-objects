var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
      console.log("QUACK!!!");
    }
  };
  
  var ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
      console.log("Estoy encantado de conocerle.");
    }
  };
  
  var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
      console.log("Hi there!");
    }
  };

  // 1
  var penguins = [gunter, ramon, fred];

  // 2
  var firstPenguin = penguins[0];
  console.log(firstPenguin);

  // 3
  var secondPenguin = penguins[1];

  // 4
  var len = penguins.length;
  var lastPenguin = penguins[len - 1];
  console.log(lastPenguin);

  // 5
  var myPenguin = {
    name : "Misha",
    origin : "Penguin Island",
    author : "Kugane Maruyama",
  }

  penguins.push(myPenguin);

  // 6
  console.log(len);

  // 7
  penguins[0].canFly = true;

  // 8
  penguins[0].sayHello();

  // 9
  for (var i = 0; i < len; i++) {
      var name = penguins[i].name;
      console.log(name);
  }

  // 10
  for (var i = 0; i < len; i++) {
    var hello = penguins[i].sayHello();
    console.log(hello);
  }

  // 11
  for (var i = 0; i < len; i++) {
    penguins[i].numberOfFeets = 2;
  }

  // 12
  for (var i = 0; i < len; i++) {
    var fly = penguins[i].canFly;
    if (fly) {
        console.log(`${penguins[i].name} can fly!`);
    }
  }

