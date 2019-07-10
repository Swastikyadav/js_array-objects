// Your solution

// 1.
function AnimalTestUser(username) {
    var obj = {
        username,
    };
    return obj;
}

// 2
function AnimalTestUser(username) {
    var obj = {
        username,
    };

    obj.otherArgs = [];

    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            obj.otherArgs.push(arguments[i]);
        }
    }
	console.log(obj);
}

// 3
function AnimalCreator(username, species, tagline, noises) {
    // this = {}; (implicitly)

    this.username = username;
    this.species = species;
    this.tagline = tagline;
    this.noises = noises;
    this.friends = [];

    // returns this (implicitly)
}

var sheep = new AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);

// 4
var cow = new AnimalCreator('Moo', 'cow', 'You can count on me!', ['maahh']);

function addFriend(sheep, cow) {
    sheep.friends.push(cow);
}

// 5
function addFriend(sheep, cow) {
    sheep.friends.push(cow.username);
}

//6 
var myFarm = [];
var lion = new AnimalCreator('lion Man', 'cat', 'I will eat you', ['roar']);
myFarm.push(sheep);
myFarm.push(cow);
myFarm.push(lion);

var cat = new AnimalCreator('caty', 'cat', 'may i come in', ['meaow']);
addFriend(sheep, cat);
addFriend(cow, cat);
addFriend(lion, cat);

// 7
function addMatchesArray() {
    for (var i = 0; i < myFarm.length; i++) {
        myFarm[i].matches = [];
    }
}

// 8
function giveMatches() {
    for (var i = 0; i < myFarm.length; i++) {
        var frnd = myFarm[i].friends;
        myFarm[i].matches.push(frnd);
    }
}