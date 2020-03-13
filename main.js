$('.imges > img:nth-child(1)').addClass('current')
$('.imges > img:nth-child(2)').addClass('enter')
$('.imges > img:nth-child(3)').addClass('enter')
let n = 1
setInterval(() => {
    $(`.imges > img:nth-child(${x(n)})`).addClass('leave').removeClass('current')
    .one('transitionend',(e)=>{
        $(e.currentTarget).removeClass('leave').addClass('enter')
    })
    $(`.imges > img:nth-child(${x(n+1)})`).addClass('current').removeClass('enter')
    n += 1
}, 3000);

function x(n){
    if(n>3){
        n = n%3
        if(n===0){
            n = 3
        }
    }
    return n
}

function initializ(){
    
}