let blocks = document.querySelectorAll('.block');
let count = blocks.length;
console.log(blocks);
window.addEventListener('scroll', e =>{
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
    let windowInnerHeight = document.documentElement.clientHeight;
    if (this.scrollY > windowInnerHeight){
        document.body.style.cssText += `--scrollTop: ${this.scrollY - windowInnerHeight}px`
    }
   
    for (let i = 0; i < count; i++){
        if (this.scrollY > windowInnerHeight * (i+1)){
            let checkBlock = document.querySelectorAll('.block');
            if (!checkBlock[i].firstElementChild.firstElementChild.classList.contains('layers__base')){
                checkBlock[i].firstElementChild.firstElementChild.classList.add('layers__base');
                checkBlock[i].firstElementChild.firstElementChild.nextElementSibling.classList.add('layers__middle');
                checkBlock[i].firstElementChild.firstElementChild.nextElementSibling.classList.add('layers__front');
            }
        }
        if (this.scrollY < windowInnerHeight * (i+1)){
            let checkBlock = document.querySelectorAll('.block');
            if (checkBlock[i].firstElementChild.firstElementChild.classList.contains('layers__base')){
                checkBlock[i].firstElementChild.firstElementChild.classList.remove('layers__base');
                checkBlock[i].firstElementChild.firstElementChild.nextElementSibling.classList.remove('layers__middle');
                checkBlock[i].firstElementChild.firstElementChild.nextElementSibling.classList.remove('layers__front');
            }
        }
    }
    
    
}
)
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.conteiner'
})