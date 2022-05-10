let nav = document.querySelector('nav');
window.addEventListener("scroll", () => {
let y = window.pageYOffset;
if(y > 150){
  nav.classList.add("sticky_on");
}else{
  nav.classList.remove("sticky_on");
}
})