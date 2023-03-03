const CouponController = require('../src/controller')
const utils = require('../src/utils')


const coupons = utils.getCouponsData()
const couponsControllerInstance = new CouponController()

// 1. How many coupons each coupon type has?

function executeExercise1(storageInstance) {
    storageInstance.saveData('Coupons percentages off: ', couponsControllerInstance.couponsbyType(coupons, 'percent-off'))
    storageInstance.saveData('Coupons buy one get one: ', couponsControllerInstance.couponsbyType(coupons, 'buy-one-get-one'))
    storageInstance.saveData('Coupons dollar off: ', couponsControllerInstance.couponsbyType(coupons, 'dollar-off'))
    storageInstance.saveData('Coupons free gift: ', couponsControllerInstance.couponsbyType(coupons, 'free-gift'))
    storageInstance.saveData('Coupons free shipping: ', couponsControllerInstance.couponsbyType(coupons, 'free-shipping'))
}

module.exports = executeExercise1
