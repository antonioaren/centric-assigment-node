const CouponController = require('../src/controller')
const utils = require('../src/utils')
const coupons = utils.getCouponsData()
const couponsControllerInstance = new CouponController()

// 2. Number of coupons with discount, the minimum discount, maximum discount and
// average discount for percent - off coupons

function executeExercise2 (storageInstance) {
    storageInstance.saveData(
        'Coupons percentages off with discount: ',
        couponsControllerInstance.getCouponsWithDiscount(coupons, 'percent-off')
    )
    
    storageInstance.saveData(
        'Coupons percentages off with discount min: ',
        couponsControllerInstance.getCouponsWithDiscountMin(coupons, 'percent-off')
    )
    
    storageInstance.saveData(
        'Coupons percentages off with discount max: ',
        couponsControllerInstance.getCouponsWithDiscountMax(coupons, 'percent-off')
    )
    
    storageInstance.saveData(
        'Coupons percentages off with discount average: ',
        couponsControllerInstance.getCouponsWithDiscountAverage(coupons, 'percent-off')
    )
}

module.exports = executeExercise2
