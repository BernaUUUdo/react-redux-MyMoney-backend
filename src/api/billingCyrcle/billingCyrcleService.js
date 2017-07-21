const BillingCyrcle = require('./billingCyrcle')
const errorHandler = require('../common/errorHandler')


BillingCyrcle.methods(['get','post','put','delete'])
BillingCyrcle.updateOptions({
    new: true,
    runValidators: true
})
BillingCyrcle
    .after('post', errorHandler)
    .after('put', errorHandler)




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

BillingCyrcle.route('summary', (req,res,next) => {
    //MEtofdo do mongoose
    BillingCyrcle.aggregate(
        {
            $project: {
                credit: {$sum : "$credits.value"},
                debt: {$sum : "$debts.value"}
            }
        },{
            //Regras de agrupamento
            $group: {
                _id: null,
                //Primeiro: Nome do atributo / segundo nome do valor recebido como parâmetro
                //Podem ser diferentes                
                credit: {$sum : "$credit"},
                debt: {$sum : "$debt"},
            }
        },
        {
            //Campos que desejo na saída
            $project: { _id: 0 , credit: 1 , debt: 1 }
                
        }, (error, result)   => {
            if(error){
                res.status(500).json({errors:[error]})
            }else{
                res.json(result[0] || {credit: 0,debt: 0 })
            }
        }
    )

})

module.exports = BillingCyrcle