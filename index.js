const CouponController = require('./src/controller')
const utils = require('./src/utils')
const Storage = require('./src/storage')

const executeExercise1 = require('./exercises/exercise_1')
const executeExercise2 = require('./exercises/exercise_2')
const executeExercise3 = require('./exercises/exercise_3')
const executeExercise4 = require('./exercises/exercise_4')


const storageInstance = new Storage()


// 1. How many coupons each coupon type has?
executeExercise1(storageInstance)
// 2. Number of coupons with discount, the minimum discount, maximum discount and
// average discount for percent - off coupons
executeExercise2(storageInstance)
// 3. Number of coupons with discount, the minimum discount, maximum discount and
//average discount for dollar - off coupons
executeExercise3(storageInstance)
// 4. Same values, but grouping by retailer
executeExercise4(storageInstance)


utils.writeJsonData(storageInstance.getAllJsonData())