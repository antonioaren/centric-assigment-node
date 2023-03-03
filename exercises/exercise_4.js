const CouponController = require('../src/controller')
const utils = require('../src/utils')
const coupons = utils.getCouponsData()
const couponsControllerInstance = new CouponController()

// 4. Same values, but grouping by retailer

function executeExercise4(storageInstance) {

    const couponsByRetailer = coupons.reduce((acc, coupon) => {
        // If this is the first time we see this retailer, create an array for it
        if (!acc[coupon.coupon_webshop_name]) {
            acc[coupon.coupon_webshop_name] = []
        }
        // Add the coupon to the retailer's array
        acc[coupon.coupon_webshop_name].push(coupon)
        return acc
    }, {})

    const retailers = Object.keys(couponsByRetailer)

    const couponsByRetailerCalculation = retailers.reduce((acc, retailer) => {
        acc[retailer] = {
            'Coupons percentages off:': couponsControllerInstance.couponsbyType(
                couponsByRetailer[retailer],
                'percent-off'
            ),
            'Coupons percentages off with discount:':
                couponsControllerInstance.getNumberOfCouponsWithDiscount(
                    couponsByRetailer[retailer],
                    'percent-off'
                ),
            'Coupons percentages off with discount min:':
                couponsControllerInstance.getCouponsWithDiscountMin(
                    couponsByRetailer[retailer],
                    'percent-off'
                ),
            'Coupons percentages off with discount max:':
                couponsControllerInstance.getCouponsWithDiscountMax(
                    couponsByRetailer[retailer],
                    'percent-off'
                ),
            'Coupons percentages off with discount average:':
                couponsControllerInstance.getCouponsWithDiscountAverage(
                    couponsByRetailer[retailer],
                    'percent-off'
                ),
            'Coupons dollar off:': couponsControllerInstance.couponsbyType(
                couponsByRetailer[retailer],
                'dollar-off'
            ),
            'Coupons dollar off with discount:':
                couponsControllerInstance.getNumberOfCouponsWithDiscount(
                    couponsByRetailer[retailer],
                    'dollar-off'
                ),
            'Coupons dollar off with discount min:':
                couponsControllerInstance.getCouponsWithDiscountMin(
                    couponsByRetailer[retailer],
                    'dollar-off'
                ),
            'Coupons dollar off with discount max:':
                couponsControllerInstance.getCouponsWithDiscountMax(
                    couponsByRetailer[retailer],
                    'dollar-off'
                ),
            'Coupons dollar off with discount average:':
                couponsControllerInstance.getCouponsWithDiscountAverage(
                    couponsByRetailer[retailer],
                    'dollar-off'
                ),
        }
        return acc
    }, {})

    storageInstance.saveData(
        'Coupons by retailer: ',
        couponsByRetailerCalculation
    )
}

module.exports = executeExercise4