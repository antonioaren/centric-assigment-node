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
    couponsControllerInstance.getCouponsWithDiscountAverage(coupons, 'dollar-off'))