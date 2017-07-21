const _ = require('lodash')

module.exports = (req, res, next ) => {
    const bundle = res.locals.bundle
    if( bundle.errors){
        const errors = parseErrors( bundle.errors)
        res.status(500).json({errors})
    }else{
        next()
    }
}


const parseErrors = (nodeRestFulErrors) => {
    //não pode mudar a referencia para outro array, mas pode ter novos elementos
    const errors = []
    _.forIn( nodeRestFulErrors , error => errors.push(error.message))
    return errors

}
