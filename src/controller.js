class CouponsController {
    constructor() {}

    couponsbyType(coupons, type) {
        /** 
         * This function returns the number of coupons by type
         */
        return coupons.filter((coupon) => coupon.promotion_type === type).length
    }

    getCouponsWithDiscount(coupons, type) {
        /** 
         * This function returns the coupons with discount
         */
        return coupons.filter(
            (coupons) => coupons.promotion_type === type && coupons.value > 0
        )
    }

    getNumberOfCouponsWithDiscount(coupons, type) {
        /**
         * This function returns the number of coupons with discount
         */
        return this.getCouponsWithDiscount(coupons, type).length
    }

    getCouponsWithDiscountMin(coupons, type) {
        /**
         * This function returns the minimum value of coupons with discount
         */
        return Math.min(
            ...(this.getCouponsWithDiscount(coupons, type)
                .map((coupons) => coupons.value))
        )
    }
    getCouponsWithDiscountMax(coupons, type) {
        /** 
         * This function returns the maximum value of coupons with discount
         */
        return Math.max(
            ...(this.getCouponsWithDiscount(coupons, type)
                .map((coupons) => coupons.value))
        )
    }
    getCouponsWithDiscountAverage(coupons, type) {
        /**
         * 1. Sum coupons with discount
         * 2. Get total coupons with discount
         * 3. Return average
         */
        const couponsSum = this.getCouponsWithDiscount(coupons, type)
            .reduce((acc, coupons) => acc + coupons.value, 0)

        const totalCoupons = this.getNumberOfCouponsWithDiscount(coupons, type)

        return couponsSum / totalCoupons
    }
}

module.exports = CouponsController
