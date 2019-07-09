var allButtons = $('.buttons>span')
for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (x) {
        var n = $(x.currentTarget).index() * -225
        console.log(n)
        $('.images').css({
            transform: 'translateX(' + n + 'px)'
        })
    })
}
var n = 0
var timeId = setInterval(() => {
    allButtons.eq(n % 3).trigger('click').addClass('red').siblings('.red').removeClass('red')
    n += 1

}, 1000)
$('.window').on('mouseenter', function () {
    window.clearInterval(timeId).addClass('red').siblings('.red').removeClass('red')
})
$('.window').on('mouseleave', function () {
    timeId = setInterval(() => {
        n += 1
        allButtons.eq(n % 3).trigger('click').addClass('red').siblings('.red').removeClass('red')
    }, 1000)
})
