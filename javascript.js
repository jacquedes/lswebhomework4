// change background color to red
document.body.style.backgroundColor = "red";

// change the background color of about me to blue
document.getElementById("about me").style.backgroundColor = "blue";

// change font style of entire document to sans-serif
document.body.style.fontFamily = "sans-serif";

// add nickname
document.getElementById("nickname").innerHTML="Jacque";

// add favorites
document.getElementById("favorites").innerHTML="Swift, Pups, Watches, Chipotle";

// add hometown
document.getElementById("hometown").innerHTML="Detroit";

// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red
var items = document.getElementsByTagName("li");
for (var i = 0; i < items.length; ++i) {
  items[i].className+="listitem";
  document.getElementsByClassName('listitem')[i].style.color = "red";
  // gray backgroud to see red text
  document.getElementsByClassName('listitem')[i].style.backgroundColor = "gray";

}

// Create a new `img` element and set its src attribute to a picture of you. Append that element to the page
var img = document.createElement("IMG");
img.src = "https://pbs.twimg.com/profile_images/747172430498631680/fCrE5Xjd.jpg";
document.body.appendChild(img);
