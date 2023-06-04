let blocks = document.querySelectorAll('.block');
let count = blocks.length;
console.log(blocks);
window.addEventListener('scroll', e =>{
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
    let windowInnerHeight = document.documentElement.clientHeight;
    for (let i = 0; i < count; i++){
        if (this.scrollY > windowInnerHeight * (i+1)){
            document.body.style.cssText += `--scrollTop: ${this.scrollY - windowInnerHeight*(i+1)}px`
        }
    }

    if (this.scrollY > windowInnerHeight){
        
    }
   
    for (let i = 0; i < count; i++){
        if (this.scrollY > windowInnerHeight * (i+1)){
            let layers = blocks[i].querySelectorAll('.layer');
            
            if(!layers[0].classList.contains('layers__base')){
                layers[0].classList.add('layers__base');
                layers[1].classList.add('layers__middle');
                layers[2].classList.add('layers__front');
            }
        }
        if (this.scrollY < windowInnerHeight * (i+1)){
            let layers = blocks[i].querySelectorAll('.layer');
            
            if(layers[0].classList.contains('layers__base')){
                layers[0].classList.remove('layers__base');
                layers[1].classList.remove('layers__middle');
                layers[2].classList.remove('layers__front');
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