const BillingCyrcle = require('./billingCyrcle')

BillingCyrcle.methods(['get','post','put','delete'])
BillingCyrcle.updateOptions({
    new: true,
    runValidators: true
})

BillingCyrcle.route('count', (req,res,next) => {
    //MEtofdo do mongoose
    BillingCyrcle.count((error,value) => {
            if(error){
                res.status(500).json({errors:[error]})
            }else{
                res.json({value})
            }
    })
})


module.exports = BillingCyrcle