let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
let array = flintstones.concat(flintstones[2], flintstones[3]);
array.splice(2, 2);
console.log(array);
let array2 = [].concat(...flintstones);
console.log(array2); //try
