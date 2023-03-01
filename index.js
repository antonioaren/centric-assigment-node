/* import express, { Response, Request } from "express";
import dotenv from "dotenv";
import routes from "./routes";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api", routes);

app.listen(process.env.PORT, () => {
    console.log(`Connected to ${process.env.PORT}`);
}); */

//require fs

const fs = require('fs')

const coupons_json = fs.readFileSync('./assets/coupons.json', 'utf8')
const coupons_object = JSON.parse(coupons_json)
const coupons = coupons_object.coupons

//TODO
// 1. How many coupons each coupon type has?

console.log("Ejercicio 1")

const couponsbyType = (type) => coupons.filter(
    (coupon) => coupon.promotion_type === type
).length


console.log('Coupons percentages off: ', couponsbyType('percent-off'))
console.log('Coupons buy one get one: ', couponsbyType('buy-one-get-one'))
console.log('Coupons dollar off: ', couponsbyType('dollar-off'))
console.log('Coupons free gift: ', couponsbyType('free-gift'))
console.log('Coupons free shipping: ', couponsbyType('free-shipping'))

// 2. Number of coupons with discount, the minimum discount, maximum discount and
// average discount for percent - off coupons

console.log("Ejercicio 2")


const getCouponsWithDiscount = (type) => coupons.filter((coupons) => coupons.promotion_type === type && coupons.value > 0).length
const getCouponsWithDiscountMin = (type) => Math.min(...coupons.filter((coupons) => coupons.promotion_type === type && coupons.value > 0).map((coupons) => coupons.value))
const getCouponsWithDiscountMax = (type) => Math.max(...coupons.filter((coupons) => coupons.promotion_type === type && coupons.value > 0).map((coupons) => coupons.value))
const getCouponsWithDiscountAverage = (type) => coupons.filter((coupons) => coupons.promotion_type === type && coupons.value > 0).reduce((acc, coupons) => acc + coupons.value, 0) / coupons.filter((coupons) => coupons.promotion_type === type && coupons.value > 0).length

console.log(
    'Coupons percentages off with discount: ',
    getCouponsWithDiscount('percent-off')
)


console.log(
    'Coupons percentages off with discount min: ',
    getCouponsWithDiscountMin('percent-off')
)


console.log(
    'Coupons percentages off with discount max: ',
    getCouponsWithDiscountMax('percent-off')
)


console.log(
    'Coupons percentages off with discount average: ',
    getCouponsWithDiscountAverage('percent-off')
)

// 3. Number of coupons with discount, the minimum discount, maximum discount and
//average discount for dollar - off coupons


console.log(
    'Coupons dollar off with discount: ',
    getCouponsWithDiscount('dollar-off')
)


console.log(
    'Coupons dollar off with discount min: ',
    getCouponsWithDiscountMin('dollar-off')
)

console.log(
    'Coupons dollar off with discount max: ',
    getCouponsWithDiscountMax('dollar-off')
)

console.log(
    'Coupons dollar off with discount average: ',
    getCouponsWithDiscountAverage('dollar-off')
)

// 4. Same values, but grouping by retailer


console.log("Ejercicio 4")

const couponsByRetailer = coupons.reduce((acc, coupon) => {
    if (!acc[coupon.coupon_webshop_name]) {
        acc[coupon.coupon_webshop_name] = []
    }
    acc[coupon.coupon_webshop_name].push(coupon)
    return acc
}, {})

console.log('Coupons by retailer: ', couponsByRetailer)

const couponsByRetailerPercentagesOff = Object.keys(couponsByRetailer).reduce(
    (acc, retailer) => {
        acc[retailer] = couponsByRetailer[retailer].filter(
            (coupon) => coupon.promotion_type === 'percent-off'
        ).length
        return acc
    }
)

console.log(
    'Coupons percentages off by retailer: ',
    couponsByRetailerPercentagesOff
)

const couponsByRetailerPercentagesOffWithDiscount = Object.keys(couponsByRetailer).reduce(
    (acc, retailer) => {
        acc[retailer] = couponsByRetailer[retailer].filter(
            (coupon) => coupon.promotion_type === 'percent-off' && coupon.value > 0
        ).length
        return acc
    })

console.log('Coupons percentages off with discount by retailer: ', couponsByRetailerPercentagesOffWithDiscount)

const couponsByRetailerPercentagesOffWithDiscountMin = Object.keys(couponsByRetailer).reduce(
    (acc, retailer) => {
        acc[retailer] = Math.min(
            ...couponsByRetailer[retailer]
                .filter(
                    (coupon) => coupon.promotion_type === 'percent-off' && coupon.value > 0
                )
                .map((coupon) => coupon.value)
        )
        return acc
    });


console.log('Coupons percentages off with discount min by retailer: ', couponsByRetailerPercentagesOffWithDiscountMin)

const couponsByRetailerPercentagesOffWithDiscountMax = Object.keys(
    couponsByRetailer
).reduce((acc, retailer) => {
    acc[retailer] = Math.max(
        ...couponsByRetailer[retailer]
            .filter(
                (coupon) => coupon.promotion_type === 'percent-off' && coupon.value > 0
            )
            .map((coupon) => coupon.value)
    )
    return acc
});

console.log('Coupons percentages off with discount max by retailer: ', couponsByRetailerPercentagesOffWithDiscountMax)


const couponsByRetailerPercentagesOffWithDiscountAverage = Object.keys(
    couponsByRetailer
).reduce((acc, retailer) => {
    acc[retailer] = couponsByRetailer[retailer]
        .filter(
            (coupon) => coupon.promotion_type === 'percent-off' && coupon.value > 0
        )
        .reduce((acc, coupon) => acc + coupon.value, 0) /
        couponsByRetailer[retailer].filter(
            (coupon) => coupon.promotion_type === 'percent-off' && coupon.value > 0
        ).length
    return acc
});

console.log('Coupons percentages off with discount average by retailer: ', couponsByRetailerPercentagesOffWithDiscountAverage)

