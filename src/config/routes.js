const express  = require('express')

module.exports = function(server){
    //Definir url base
    const router = express.Router()
    server.use('/api',router)
    //Rotas de ciclo de pagamentos
    const BillingCyrcle = require('../api/billingCyrcle/billingCyrcleService')
    BillingCyrcle.register(router, '/billingCyrcles')




}