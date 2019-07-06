var myPenguin = {
    name : "Misha",
    origin : "Penguin Island",
    author : "Kugane Maruyama",
}

// 1
myPenguin.outfit = {
    hat : "baseball cap",
    shirt : "Hawaiian shirt",
    pants : "cargo short",
    shoes : "flip flops",
};

// 2
var penguinsHatType = myPenguin.outfit.hat;
console.log(penguinsHatType);

// 3
myPenguin.outfit.accessory = "pocket watch";

// 4
myPenguin.outfit.hat = "top hat";

// 5
delete myPenguin.outfit.pants;

// 6
for (var i in myPenguin.outfit) {
    console.log(i);
}