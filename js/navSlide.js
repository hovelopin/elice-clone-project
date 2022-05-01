const category = document.querySelector('.category');
const categoryWrap = document.querySelector("#category_wrap");
const categoryWrapUl = document.querySelector('#category ul');
const categoryItems = document.querySelector('.category_items');

// 마우스를 올렸을때 작동해라
category.addEventListener('mouseenter',(e)=>{
  categoryWrap.style.display = 'block';
});

// 마우스를 내렸을때 작동해라 (잘 동작하지 않음) => 일단 패스
categoryItems.addEventListener('mouseleave',(e)=>{
  console.log('작동해라');
  categoryWrap.style.display = 'none';
});
