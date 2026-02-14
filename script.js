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
 /* step 5  aded button scycling functinonality to cycle through each button*/ 
btn1.onclick = function () {
    selected[0] = characters[index1];
    btn1.textContent = selected[0];
    index1 = (index1 + 1) % characters.length;
};

btn2.onclick = function () {
    selected[1] = actions[index2];
    btn2.textContent = selected[1];
    index2 = (index2 + 1) % actions.length;
};
btn3.onclick = function () {
    selected[2] = places[index3];
    btn3.textContent = selected[2];
    index3 = (index3 + 1) % places.length;
};

btn4.onclick = function () {
    selected[3] = times[index4];
    btn4.textContent = selected[3];
    index4 = (index4 + 1) % times.length;
};

btn5.onclick = function () {
    selected[4] = feelings[index5];
    btn5.textContent = selected[4];
    index5 = (index5 + 1) % feelings.length;
};
//step 6 created a function that generates the story by concatenating the selected words and displays it in the output div
document.getElementById("createStory").onclick = function () {
    // Check if all selections are made
    if (selected.includes("")) {
        output.textContent = "Kindly select all the parts of the story!";
        return;
    }
     // then  combine selections into one sentence
    const story = `${selected[0]} ${selected[1]} something ${selected[2]} ${selected[3]} ${selected[4]}`;

    // Display story
    output.textContent = story;

    // Speak the story aloud
    speakStory(story);
};