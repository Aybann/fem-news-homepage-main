const menuItem = document.querySelector(".menu-items");
const menuItems = document.querySelectorAll(".menu-items li");

var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

const hamburgerBtn = document.querySelector(".menuBtn");

hamburgerBtn.addEventListener("click", function() {
  console.log("Hi")
  toggle();
});

menuItems.forEach((Item) =>{
  Item.addEventListener("click", () =>{
      toggle();
  });
});

function toggle(){
  hamburgerBtn.classList.toggle("is-active");
  menuItem.classList.toggle("open");
}
