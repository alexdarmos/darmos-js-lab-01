"use strict";

let name1 = prompt("What's your name?");
let name2 = prompt("What's your name?");
let name3 = prompt("What's your name?");

if(name1.length > name2.length && name1.length > name3.length) {
  console.log(`${name1} has the longest name.`);
  document.write(`${name1} has the longest name.`);
} else if (name2.length > name1.length && name2.length > name3.length) {
  console.log(`${name2} has the longest name.`);
  document.write(`${name2} has the longest name.`);
} else if (name3.length > name1.length && name3.length >name2.length) {
  console.log(`${name3} has the longest name.`);
  document.write(`${name3} has the longest name.`);
} else if (name1.length === name2.length && name1.length > name3.length) {
  console.log(`${name1} and ${name2} tie for the longest name.`);
  document.write(`${name1} and ${name2} tie for the longest name.`);
} else if (name1.length === name3.length && name1.length > name2.length) {
  console.log(`${name1} and ${name3} tie for the longest name.`);
  document.write(`${name1} and ${name3} tie for the longest name.`);
} else if (name2.length === name3.length && name2.length > name1.length) {
  console.log(`${name2} and ${name3} tie for the longest name.`);
  document.write(`${name2} and ${name3} tie for the longest name.`);
} else if (name1.length === name2.length && name1.length === name3.length) {
  console.log(`${name1}, ${name2}, and ${name3} are all the same length`);
  document.write(`${name1}, ${name2}, and ${name3} are all the same length`);
}
