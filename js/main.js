var allButtons = $('#buttons > span')
console.log(allButtons)
for (let i = 0; i < allButtons.length; i++) {
    console.log(allButtons[i])
    $(allButtons[i]).on('click', function (x) {

        var index = $(x.currentTarget).index()
        console.log(x.currentTarget)
        var n = index * -225
        console.log(n)
        $('.images').css({
            transform: 'translateX(' + n + 'px)'
        })
    })
}
var n = 0
var size = allButtons.length
allButtons.eq(n % size).trigger('click').addClass('red').siblings('.red').removeClass('red')

var timeId = setInterval(() => {
    n += 1
    allButtons.eq(n % size).trigger('click').addClass('red').siblings('.red').removeClass('red')
}, 1000
)
$('.window').on('mouseenter', function () {
    window.clearInterval(timeId)
})
$('.window').on('mouseleave', function () {
    timeId = setInterval(() => {
        n += 1
        allButtons.eq(n % size).trigger('click').addClass('red').siblings('.red').removeClass('red')
    }, 1000
    )
})