const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", ()=> {
  const visiblity = nav.getAttribute("data-visible");
  if(visiblity === "false") {

    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true)
  }else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false)
  }

})
let dropdown = document.getElementsByClassName("dropdown")
let imageDown = document.getElementsByClassName("arrow-light");
let dropdownContent1 = document.querySelector(".dropdown-content")

for (let i = 0; i < dropdown.length; i++){
  dropdown[i].addEventListener("mouseout", function(){

  let imageDown1 = this.getElementsByTagName("img")[0];
  if(dropdownContent1.visibility = "visible"){
    
    imageDown1.style.transform = "rotate(0deg)";
  } else {
    imageDown1.style.transform = "rotate(180deg)";
  }
}
);
}
for (let i = 0; i < dropdown.length; i++){
  dropdown[i].addEventListener("mouseover", function(){

  let imageDown1 = this.getElementsByTagName("img")[0];
  if(dropdownContent1.visibility = "visible"){
    
    imageDown1.style.transform = "rotate(180deg)";
  } else {
    imageDown1.style.transform = "rotate(0deg)";
  }
}
);
}
