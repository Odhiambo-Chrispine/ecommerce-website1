const productContainers = [...document.querySelectorAll('.product-container')];
const nextBtn = [...document.querySelectorAll('.next-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

const resizeOps = () => {
    document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
  };

  resizeOps();
  window.addEventListener("resize", resizeOps);

productContainers.forEach((item, i)=>{
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nextBtn[i].addEventListener('click',()=>{
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click',()=>{
        item.scrollLeft -= containerWidth;
    })
})