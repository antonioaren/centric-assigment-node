const CouponController = require('./src/controller')
const utils = require('./src/utils')
const Storage = require('./src/storage')
const executeExercise1 = require('./exercises/exercise_1')


const coupons = utils.getCouponsData()
const couponsControllerInstance = new CouponController()
const storageInstance = new Storage()


executeExercise1(storageInstance)


// 1. How many coupons each coupon type has?

/* storageInstance.saveData('Coupons percentages off: ', couponsControllerInstance.couponsbyType(coupons, 'percent-off'))
storageInstance.saveData('Coupons buy one get one: ', couponsControllerInstance.couponsbyType(coupons, 'buy-one-get-one'))
storageInstance.saveData('Coupons dollar off: ', couponsControllerInstance.couponsbyType(coupons, 'dollar-off'))
storageInstance.saveData('Coupons free gift: ', couponsControllerInstance.couponsbyType(coupons, 'free-gift'))
storageInstance.saveData('Coupons free shipping: ', couponsControllerInstance.couponsbyType(coupons, 'free-shipping')) */

// 2. Number of coupons with discount, the minimum discount, maximum discount and
// average discount for percent - off coupons

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

// 3. Number of coupons with discount, the minimum discount, maximum discount and
//average discount for dollar - off coupons


storageInstance.saveData(
    'Coupons dollar off with discount: ',
    couponsControllerInstance.getCouponsWithDiscount(coupons, 'dollar-off')
)


storageInstance.saveData(
    'Coupons dollar off with discount min: ',
    couponsControllerInstance.getCouponsWithDiscountMin(coupons, 'dollar-off')
)

storageInstance.saveData(
    'Coupons dollar off with discount max: ',
    couponsControllerInstance.getCouponsWithDiscountMax(coupons, 'dollar-off')
)

storageInstance.saveData(
    'Coupons dollar off with discount average: ',
    couponsControllerInstance.getCouponsWithDiscountAverage(coupons, 'dollar-off')
)

/* console.log(storageInstance.getDataSaved()) */


// 4. Same values, but grouping by retailer

const couponsByRetailer = coupons.reduce((acc, coupon) => {

    if (!acc[coupon.coupon_webshop_name]) {
        acc[coupon.coupon_webshop_name] = []
    }
    acc[coupon.coupon_webshop_name].push(coupon)
    return acc
}, {})


const retailers = Object.keys(couponsByRetailer)

const couponsByRetailerCalculation = retailers.reduce((acc, retailer) => {
    acc[retailer] = {
        "Coupons percentages off:": couponsControllerInstance.couponsbyType(couponsByRetailer[retailer], 'percent-off'),
        "Coupons percentages off with discount:": couponsControllerInstance.getCouponsWithDiscount(couponsByRetailer[retailer], 'percent-off'),
        "Coupons percentages off with discount min:": couponsControllerInstance.getCouponsWithDiscountMin(couponsByRetailer[retailer], 'percent-off'),
        "Coupons percentages off with discount max:": couponsControllerInstance.getCouponsWithDiscountMax(couponsByRetailer[retailer], 'percent-off'),
        "Coupons percentages off with discount average:": couponsControllerInstance.getCouponsWithDiscountAverage(couponsByRetailer[retailer], 'percent-off'),
        "Coupons dollar off:": couponsControllerInstance.couponsbyType(couponsByRetailer[retailer], 'dollar-off'),
        "Coupons dollar off with discount:": couponsControllerInstance.getCouponsWithDiscount(couponsByRetailer[retailer], 'dollar-off'),
        "Coupons dollar off with discount min:": couponsControllerInstance.getCouponsWithDiscountMin(couponsByRetailer[retailer], 'dollar-off'),
        "Coupons dollar off with discount max:": couponsControllerInstance.getCouponsWithDiscountMax(couponsByRetailer[retailer], 'dollar-off'),
        "Coupons dollar off with discount average:": couponsControllerInstance.getCouponsWithDiscountAverage(couponsByRetailer[retailer], 'dollar-off'),
    }
    return acc
}, {})

storageInstance.saveData('Coupons by retailer: ', couponsByRetailerCalculation)
