console.log('hello');
const searchEl = document.querySelector('.search');
const searchInputEl = document.querySelector('.search input');

console.log(searchEl);
console.log(searchInputEl);

searchEl.addEventListener('click',function(){
   searchInputEl.focus(); 
});

searchInputEl.addEventListener('focus',function(){
    searchInputEl.setAttribute('placeholder','통합검색');
    searchEl.classList.add('focused');
});

searchInputEl.addEventListener('blur',function(){
    searchInputEl.setAttribute('placeholder','');
    searchEl.classList.remove('focused');
});

new Swiper('.notice_line', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    autoplay:true
  });
  //순서대로 나타날 요소
  const fadeEls = document.querySelectorAll('.banner .fade-in');//배열 
//   console.log(fadeEls);
  fadeEls.forEach(function(fadeEl,index){
    // console.log(fadeEls);
    // console.log(index);
    gsap.to(fadeEl,1,{
        delay:(index+1)*0.5,
        opacity:1
    })
  });

  const upDownBtn = document.querySelector('.up-Down-Btn');
console.log(upDownBtn);
upDownBtn.addEventListener('click',function(){
    let upDownOn = upDownBtn.classList.contains('on');
    let controlUpDown = upDownBtn.textContent;
    if(upDownOn){
        upDownBtn.classList.remove('on');
        upDownBtn.textContent='expand_circle_up';
    }else{
        upDownBtn.classList.add('on');
        upDownBtn.textContent='expand_circle_down';
    }
});
  const promoSwiper = new Swiper('.promotion .swiper-container',{
    slidesPerView:3, //한번에 슬라이드3개
    spaceBetween:10, //슬라이드사이 여백
    centeredSlides:true, //보여질 슬라이드가 가운데
    loop: true,
    autoplay:{
    delay:1000 //5초
    },
    pagination:{
        el:'.promotion .swiper-pagination',
        clickable:true
    },
    navigation:{
        prevEl:'.promotion .swiper-prev',
        nextEl:'.promotion .swiper-next'
    }
});
const swiperControlBtn = document.querySelector('.swiper-control-btn');
swiperControlBtn.addEventListener('click',function(){
    let isSwiperOn = swiperControlBtn.classList.contains('on');
    let controlBtnContent = swiperControlBtn.textContent;
    if(isSwiperOn){
        swiperControlBtn.classList.remove('on');
        promoSwiper.autoplay.stop();
        swiperControlBtn.textContent='pause';
    }else{
        swiperControlBtn.classList.add('on');
        promoSwiper.autoplay.start();
        swiperControlBtn.textContent='play_arrow';
    }
})
//프로모션 영역요소
const promotionEl = document.querySelector('.promotion');
//프로모션 영역 토글 버튼요소
const promotionToggleBtn = document.querySelector('.toggle-promotion');

console.log(promotionEl);
console.log(promotionToggleBtn)
//프로모션 영역 숨김 여부
let isHidePromotion = false;
//토글버튼클릭하면 보이게하는...
promotionToggleBtn.addEventListener('click',function(){
    //프로모션 영역 숨김여부 확인 hide로써
    isHidePromotion = promotionEl.classList.contains('hide');
    if(!isHidePromotion){
        promotionEl.classList.add('hide');
    }else{
        promotionEl.classList.remove('hide');
    }
});

const spyEls = document.querySelectorAll('#body_layout .scroll-spy');
// console.log(spyEls) 실행O

spyEls.forEach(function(spyEl){
    //scene는 페이지를 감지 setclasstoggle(역할추가)
    // console.log(spyEl)
    new ScrollMagic.Scene({
        triggerElement: spyEl //보여짐 여부를 감지할 요소
        ,triggerHook : 0.8 //화면의 80%지점에서 감지
    }).setClassToggle(spyEl, 'show') //요소가 화면에 감지되면 show클래스 추가
    .addTo(new ScrollMagic.Controller()); //코드내부에 기능 할당(필수!)
});
const awardsSwiper = new Swiper('.AWARDS .swiper-container',{
    slidesPerView:5, 
    spaceBetween:30, 
    loop: true,
    autoplay:{
    delay:100
    },
    navigation:{
        prevEl:'.AWARDS .swiper-prev',
        nextEl:'.AWARDS .swiper-next'
    }
});

const badgeEl =document.querySelector('#head_layout .badges');
// console.log(badgeEl);

//throttle 일정시간에만 실행이 되도록 즉 반복되지않게
window.addEventListener('scroll',_.throttle(function(){
    // console.log('scroll');
    //뱃지 보이기
    if(window.scrollY > 600){
        gsap.to(badgeEl,.6,{
            opacity:0,
            display: 'none'
        });
        gsap.to('#goup',0.3,{
            x: 0
        });
        //상단배너 숨기기
    }else{
        //뱃지 숨기기
        gsap.to(badgeEl,.6,{
            opacity:1,
            display: 'block'
        });
        gsap.to('#goup',0.3,{
            x:100
        });
        //상단배너 보이기
    }
},300));
const goupEl = document.querySelector('#goup');
    goupEl.addEventListener('click',function(){
        gsap.to(window,0.7,{
            scrollTo:0
        })
    });