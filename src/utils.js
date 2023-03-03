const fs = require('fs')

function getCouponsData() {
    const coupons_json = fs.readFileSync('assets/coupons.json', 'utf8')
    const coupons_object = JSON.parse(coupons_json)
    return coupons_object.coupons
}

//Export this function to be used in other files
module.exports = {
    getCouponsData
}