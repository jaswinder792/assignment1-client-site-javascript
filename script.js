/* ===========================
   STEP 1:  ARRAYS FOR STORY PARTS TO MAKE SENTENCE
   =========================== */


const characters = ["The dragon", "A robot", "The princess", "A pirate", "The cat"];
const actions = ["ate", "chased", "found", "lost", "built"];
const places = ["in the park", "on the moon", "at school", "in the castle", "under the sea"];
const times = ["yesterday", "last night", "this morning", "one day", "long ago"];
const feelings = ["quietly.", "happily.", "angrily.", "excitedly.", "mysteriously."];
// step 2: indexes added to  keep  the track of the current position in each array
let index1 = 0;
let index2 = 0;
let index3 = 0;
let index4 = 0;
let index5 = 0;
//  step 3 added array taht  stores the chosen words
let selected = ["", "", "", "", ""];
/* step 4 added buttons references  */

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");

const output = document.getElementById("output");