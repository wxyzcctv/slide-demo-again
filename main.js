let $buttons = $("#buttonWrapper").children()
let $slides = $('#slides')
let current = 0
let $imges = $slides.children('img')

makeFakeSlids()
bindEvents()
$(next).on('click',function(){
    goToSlides(current+1)
})
$(previous).on('click',function(){
    goToSlides(current-1)
})

let timer = setInterval(function(){
    goToSlides(current+1)
},2000)

$('.container').on('mouseenter',function(){
    window.clearInterval(timer)
}).on('mouseleave',function(){
    timer = setInterval(function(){
        goToSlides(current+1)
    },2000)
})

document.addEventListener('visibilitychange',function(){
    if(document.hidden){
        window.clearInterval(timer)
    }else(
        timer = setInterval(function(){
            goToSlides(current+1)
        },2000) 
    )
})

function makeFakeSlids(){
    let $firstFakeButton = $imges.eq(0).clone(true)
    let $lastFakeButton = $imges.eq($imges.length - 1).clone(true)
    $slides.append($firstFakeButton)
    $slides.prepend($lastFakeButton)
}

function bindEvents(){
    $('#buttonWrapper').on('click','button',function(e){
        let $button = $(e.currentTarget)
        let index = $button.index()
        goToSlides(index)
    })
}
function goToSlides(index){
    if(index>$buttons.length - 1){
        index = 0
    }else if(index<0){
        index = $buttons.length - 1
    }
    if(current === $buttons.length - 1 && index === 0){
        $slides.css({transform:`translateX(${-($buttons.length + 1) * 400}px)`})
        .one('transitionend',function(){
            $slides.hide().offset()
            $slides.css({transform:`translateX(${-(index+1)*400}px)`}).show()
        })
    }else if(current === 0 && index === $buttons.length -1){
        $slides.css({transform:`translateX(0px)`})
        .one('transitionend',function(){
            $slides.hide().offset()
            $slides.css({transform:`translateX(${-(index+1)*400}px)`}).show()
        })
    }else{
        $slides.css({transform:`translateX(${-(index+1)*400}px)`})
    }
    current = index
}