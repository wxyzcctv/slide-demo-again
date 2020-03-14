let n
initializ()
let timer = setInterval(() => {
    makeLeave(getImge(n))
    .one('transitionend',(e)=>{
        makeEnter($(e.currentTarget))
    })
    makeCurrent(getImge(n+1))
    n += 1
}, 3000);

document.addEventListener('visibilitychange',function(e){
    if(document.hidden){
        window.clearInterval(timer)
    }else{
        timer = setInterval(() => {
            makeLeave(getImge(n))
            .one('transitionend',(e)=>{
                makeEnter($(e.currentTarget))
            })
            makeCurrent(getImge(n+1))
            n += 1
        }, 3000);
    }
})


function getImge(n){
    return $(`.imges > img:nth-child(${x(n)})`)
}
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
    n = 1
    $('.imges > img:nth-child(1)').addClass('current')
    $('.imges > img:nth-child(2)').addClass('enter')
    $('.imges > img:nth-child(3)').addClass('enter')
}
function makeLeave($node){
    $node.addClass('leave').removeClass('current enter')
    return $node
}
function makeEnter($node){
    $node.addClass('enter').removeClass('current leave')
}
function makeCurrent($node){
    $node.addClass('current').removeClass('enter leave')
}
