const BillingCyrcle = require('./BillingCyrcle')

BillingCyrcle.methods(['get','post','put','delete'])
BillingCyrcle.updateOptions({
    new: true,
    runValidators: true
})


module.exports(BillingCyrcle)