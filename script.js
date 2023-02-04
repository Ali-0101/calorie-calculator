/* redirect to index.html page and do local storage when button is clicked*/
let input = document.getElementById("floatingInput");

function logInBtn() {
  window.location.href = "index.html";
  localStorage.setItem("value", input.value);
  
}

window.onload = function() {
  let show = localStorage.getItem("value");

  let welcome = document.getElementById("welcome");
  if (welcome) {
    welcome.innerHTML = "Welcome " + show;
  }

  let userName = document.getElementById("userName");
  if (userName) {
    userName.innerHTML = show;
  }
};
/* end of redirect to index.html page and do local storage when button is clicked*/


/* style navigation items when it's active */
const list = document.querySelectorAll(".nav-item");

function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));
/* end of style navigation items */


   /* calculate calories (diary.html) */
   function calculateTotal() {
    var meat = document.getElementById("1").value;
    var fruit = document.getElementById("2").value;
    var veg = document.getElementById("3").value;
    var bread = document.getElementById("4").value;
    var totalCalc = parseInt(meat) + parseInt(fruit) + parseInt(veg) + parseInt(bread);
    document.getElementById("totalCals").innerHTML = totalCalc;
  }
  /* end of calculate calories (diary.html) */

  /* reset all select elements to default and reset total calories when clicked reset (diary.html)*/
  function resetSelects() {
  var selects = document.querySelectorAll("select");
  for (var i = 0; i < selects.length; i++) {
    selects[i].selectedIndex = 0;
  }
  document.getElementById("totalCals").innerHTML = "0";
}

