var copyright = "Copyright(C) <2020> <Yiyu Zhou>"; // copyright
var generalIntroductionOfTheProgram = 'welcome, this is a progrm to help you to have a better understanding of the "GNU/Linux" and the "Free/Libre software"';
var goHome = "Going back to home screen."; // prompt in the console that the screen is changing to "mainScreen"
console.log(copyright);
console.log(generalIntroductionOfTheProgram);
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
playSound("assets/Real-Ride-1-Minute-Cut---No-Copyright.mp3"); // back ground music
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
onEvent("author", "click", function() {
  setScreen("linusTorvaldsScreen"); // change screen to "linusTorvaldsScreen"
  console.log("Introducing Linus Torvalds.");
});

onEvent("freeSoftware", "click", function() {
  setScreen("freeSoftwareFoundationScreen"); //change screen to "freeSoftWareFoundationScreen"
  console.log("Introducing the Free Software Foundation.");
});

onEvent("founder", "click", function() {
  setScreen("richardStallmanScreen"); // change screen to "richardStallmanScreen"
  console.log("Introducing Richard Stallman.");
});

onEvent("about", "click", function() {
  setScreen("aboutScreen"); // change screen to "aboutScreen"
  console.log("Showing the GNU General Public License.");
});
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/* the section above this line are all the general screen changing functions */

/* the section under this line are all the "goBackToPrevious" and "goHome" functions */
/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
onEvent("goBackToPrevious", "click", function() {
  setScreen("freeSoftwareFoundationScreen"); // change screen from "richardStallmanScreen" to "freeSoftwareFoundationScreen"
  console.log("Going back to the Free Software Foundation screen.");
});
/**
 * This comment is a clarification for the set of screen IDs underneath.
 * To avoid unexpected typos in the program, I tried not to make the screen ID variables to long.
 * Instead, I added numbers at the end of "goHome" variables. For example, "goHome0".
 * 
 * There is a total of 3 home buttons in this program.
 * Here is a list of the button IDs with the screen they correspond to:
 * goHome0: "linusTorvaldsScreen"
 * goHome1: "freeSoftwareFoundationScreen"
 * goHome2: "richardStallmanScreen"
 * goHome3: "aboutScreen"
 * 
 * Hope this is going to be helpful.
 */
onEvent("goHome0", "click", function() {
  setScreen("mainScreen"); // change sreen from "linusTorvaldsScreen" to "mainScreen"
  console.log(goHome);
});

onEvent("goHome1", "click", function() {
  setScreen("mainScreen"); // change screen from "freeSoftwareFoundationScreen" to "mainScreen"
  console.log(goHome);
});

onEvent("goHome2", "click", function() {
  setScreen("mainScreen"); // change screen from "richardStallmanScreen" to "mainScreen"
  console.log(goHome);
});

onEvent("goHome3", "click", function() {
  setScreen("mainScreen"); // change screen from "aboutScreen" to "mainScreen"
  console.log(goHome);
});
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// In this section, I added picture reactions
onEvent("linuxIcon", "click", function(){
  console.log("Official website of the Linux Foundation: <https://www.linuxfoundation.org/>.");
});

onEvent("freeSoftwareFoundation", "click", function(){
  console.log("Official website of the Free Software Foundation: <https://www.fsf.org/>.");
});

onEvent("richardStallman", "click", function(){
  console.log("Richard stallman's personal site: <https://stallman.org/>.");
});

onEvent("GplLogo", "click", function (){
  console.log("This program is under the GNU General Public License.");
});
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/**
 * EASTER EGG!
 * WARNING!!
 * CONTAINING INAPPROPRIATE CONTENT!!!
 */
onEvent("pictureOfLinusTorvalds", "click", function(){
  playSound("assets/Nvidia--Fuck-You!.mp3");
  /**
   * Aalto Talk with Linus Torvalds,
   * hosted by Aalto Center for Entrepreneurship in Otaniemi on June 14, 2012.
   * Linus was interviewed by Will Cardwell and followed with a Q&A session with the audience.
   * 
   * Nvidia doesn't want to open source their GPU drivers. Linus Torvalds was not happy with that.
   * See <https://youtu.be/iYWzMvlj2RQ> for more information.
   */
  console.log("Easter egg!");
  console.log("Talk is cheep, show me the code! - Linus Torvalds");
});