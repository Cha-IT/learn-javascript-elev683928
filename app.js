
let navn = "Malte";
console.log("Hei " + navn);


let tall1 = 4;
let tall2 = 3;
console.log(tall1 + " + " + tall2 + " = " + (tall1 + tall2));
console.log(tall1 + " - " + tall2 + " = " + (tall1 - tall2));
console.log(tall1 + " * " + tall2 + " = " + (tall1 * tall2));
console.log(tall1 + " / " + tall2 + " = " + (tall1 / tall2));


let alder = 16;
if (alder < 18) {
  console.log("Du får ikke kjøpe øl");
} else {
  console.log("Du får kjøpe øl");
}


if (alder < 18) {
  console.log("Du kan kjøpe barnebillett");
} else if (alder < 67) {
  console.log("Du skal kjøpe voksenbillett");
} else {
  console.log("Du kan kjøpe honnørbillett");
}
