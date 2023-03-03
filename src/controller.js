class CouponsController {
    constructor() {
    }

    couponsbyType(coupons, type) {
        return coupons.filter((coupon) => coupon.promotion_type === type).length
    }

    getCouponsWithDiscount(coupons, type) {
        return coupons.filter(
            (coupons) => coupons.promotion_type === type && coupons.value > 0
        ).length
    }

    getCouponsWithDiscountMin(coupons, type) {
        return Math.min(
            ...coupons
                .filter(
                    (coupons) =>
                        coupons.promotion_type === type && coupons.value > 0
                )
                .map((coupons) => coupons.value)
        )
    }
    getCouponsWithDiscountMax(coupons, type) {
        return Math.max(
            ...coupons
                .filter(
                    (coupons) =>
                        coupons.promotion_type === type && coupons.value > 0
                )
                .map((coupons) => coupons.value)
        )
    }
    getCouponsWithDiscountAverage(coupons, type) {
        return (
            coupons
                .filter(
                    (coupons) =>
                        coupons.promotion_type === type && coupons.value > 0
                )
                .reduce((acc, coupons) => acc + coupons.value, 0) /
            coupons.filter(
                (coupons) =>
                    coupons.promotion_type === type && coupons.value > 0
            ).length
        )
    }
}

module.exports = CouponsController;
