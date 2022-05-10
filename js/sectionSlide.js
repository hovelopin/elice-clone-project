const sectionLeftBtn = document.querySelector('.section_left_btn');
const sectionRightBtn = document.querySelector('.section_right_btn');
const sectionContentWrap = document.querySelectorAll('.section_contents_wrap');

sectionRightBtn.addEventListener('click',() => {
  let currentSlide = document.querySelector('section .gallery_wrap .galleryOn');
  let nextSlide = currentSlide.nextElementSibling;

  // 다음 슬라이더가 마지막 엘리먼트이면 버튼을 없애자 비효율적인 코드라서 시간되면 바꿔보자
  if(nextSlide === currentSlide.parentElement.lastElementChild){
    sectionRightBtn.style.display = 'none';
    sectionLeftBtn.style.display='block';
  }else{
    sectionRightBtn.style.display = 'block';
    sectionLeftBtn.style.display='block';
  }

  currentSlide.animate({
    opacity:[1,0]
  },{
    duration:500,
    easing:"ease",
    iterations:1,
    fill:"both"
  });
  currentSlide.classList.remove("galleryOn");
  nextSlide.animate({
    opacity: [0,1]
  },{
    duration:500,
    easing:"ease",
    iterations:1,
    fill:"both"
  });
  nextSlide.classList.add("galleryOn");
  
});

sectionLeftBtn.addEventListener('click', () => {
  let currentSlide = document.querySelector('section .galleryOn');
  let nextSlide = currentSlide.previousElementSibling;

  // 다음 슬라이더가 첫번째 엘리먼트이면 버튼을 없애자 비효율적인 코드라서 시간되면 바꿔보자
  if(nextSlide === currentSlide.parentElement.firstElementChild){
    sectionLeftBtn.style.display='none';
    sectionRightBtn.style.display = 'block';
  }else{
    sectionLeftBtn.style.display='block'
    sectionRightBtn.style.display = 'block';
  }
  currentSlide.animate({
    opacity:[1,0]
  },{
    duration:500,
    easing:"ease",
    iterations:1,
    fill:"both"
  });
  currentSlide.classList.remove("galleryOn");
  nextSlide.animate({
    opacity: [0,1]
  },{
    duration:500,
    easing:"ease",
    iterations:1,
    fill:"both"
  });
  nextSlide.classList.add("galleryOn");

})