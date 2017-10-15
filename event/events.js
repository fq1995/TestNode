/**
 * Created by fu on 2017/10/11.
 */
var EventEmitter = require('events').EventEmitter

var life = new EventEmitter()

life.setMaxListeners(11)
//addEventListener

life.on('求安慰',function (who) {
    console.log('给'+ who + '倒水')
})

life.on('求安慰',function (who) {
    console.log('给'+ who + '做饭')
})

life.on('求安慰',function (who) {
    console.log('给'+ who + '洗衣服')
})

life.on('求安慰',function (who) {
    console.log('给'+ who + '捶背')
})

life.on('求安慰',function (who) {
    console.log('给'+ who + '..5')
})

life.on('求安慰',function (who) {
    console.log('给'+ who + '..6')
})

life.on('求安慰',function (who) {
    console.log('给'+ who + '..7')
})

life.on('求安慰',function (who) {
    console.log('给'+ who + '..8')
})

life.on('求安慰',function (who) {
    console.log('给'+ who + '..9')
})

life.on('求安慰',function (who) {
    console.log('给'+ who + '..10')
})

function lei(who) {
    console.log('给'+ who + '累死了')
}

life.on('求安慰',lei)

life.on('求溺爱',function (who) {
    console.log('给'+ who + '买衣服')
})

life.removeListener('求安慰',lei)

life.removeAllListeners('求安慰')
var hasConfortListener = life.emit('求安慰', '汉子')
var hasLovedListener = life.emit('求溺爱', '妹子')
var hasPlayedListener = life.emit('求玩坏','妹子和汉子')

console.log(life.listeners('求安慰').length)

// console.log(EventEmitter.listenerCount(life, '求安慰'))
/*

console.log(hasConfortListener)
console.log(hasLovedListener)
console.log(hasPlayedListener)*/
