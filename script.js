var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.querySelectorAll("li");

function inputLength() {
  return input.value.length;
}

// new list items
function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  //creates buttons
  var btn1 = document.createElement("button");
  var btn2 = document.createElement("button");
  btn1.innerHTML = "Done";
  btn2.innerHTML = "Delete";
  li.appendChild(btn1);
  li.appendChild(btn2);
  // removes element
  btn2.addEventListener("click", function () {
    li.parentNode.removeChild(li);
  });
  //continue code
  li.addEventListener("click", function () {
    li.classList.toggle("done");
  });
  ul.appendChild(li);
  input.value = "";
}

// existing list items
Array.from(items).forEach(function (item) {
  var btn1 = document.createElement("button");
  var btn2 = document.createElement("button");
  //creates buttons
  btn1.innerHTML = "Done";
  btn2.innerHTML = "Delete";
  item.appendChild(btn1);
  item.appendChild(btn2);
  // removes element
  btn2.addEventListener("click", function () {
    item.parentNode.removeChild(item);
  });
  //continue code
  item.addEventListener("click", function () {
    item.classList.toggle("done");
  });
});

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
