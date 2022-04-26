const slider = document.querySelector('#slider');
const slide = document.querySelector('.slide');

const right = document.querySelector('.right_arrow');
const left = document.querySelector('.left_arrow');

const cnt = document.querySelector('.cnt');

function rightSlide(){
  let currentSlide = document.querySelector('#slider .active');
  let nextSlide = currentSlide.nextElementSibling;

  // 오른쪽으로 넘기다가 다음칸이 null이면 다시 첫번째 element를 가르킨다.
  if(nextSlide === null){
    nextSlide = currentSlide.parentElement.firstElementChild;
  }

  currentSlide.animate({
    opacity: [1,0]
  },{
    duration:500,
    easing:"ease",
    iterations:1,
    fill:"both"
  });
  currentSlide.classList.remove('active');
  nextSlide.animate({
    opacity: [0,1]
  },{
    duration:500,
    easing:"ease",
    iterations:1,
    fill:"both"
  });

  // 일단 이부분에서 굉장히 헷갈렸는데 value값으로 가져올수있다고 생각했지만 innerHTML이나 textContent를 해야함 
  // 그리고 값을 증가할때 쫌 헷갈렸음
  cnt.innerHTML = Number(cnt.textContent) + 1;
  if(cnt.innerHTML === '5'){
    cnt.innerHTML = 1;
  }
  nextSlide.classList.add('active');
}

right.addEventListener('click',rightSlide);

function leftSlide(){
  let currentSlide = document.querySelector('#slider .active');
  let nextSlide = currentSlide.previousElementSibling;

  //만약에 왼쪽으로 넘기다가 다음 값이 null이면 마지막 요소를 가르킴 
  if(nextSlide === null){
    nextSlide = currentSlide.parentElement.lastElementChild;
  }
  currentSlide.animate({
    opacity: [1,0]
  },{
    duration:500,
    easing:"ease",
    iterations:1,
    fill:"both"
  });
  currentSlide.classList.remove('active');
  nextSlide.animate({
    opacity: [0,1]
  },{
    duration:500,
    easing:"ease",
    iterations:1,
    fill:"both"
  });
  cnt.innerHTML = Number(cnt.textContent) - 1;
  if(cnt.innerHTML === '0'){
    cnt.innerHTML = 4;
  }
  nextSlide.classList.add('active');
}

left.addEventListener('click' , leftSlide);
