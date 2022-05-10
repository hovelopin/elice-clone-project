const qnbWrap = document.querySelector('#qnb_wrap');
window.addEventListener("scroll", () => {
  let y = window.pageYOffset;
  if(y > 480){
    qnbWrap.style.top = y + "px";
    qnbWrap.style.transition = `0.8s`;
  }
})