const random_router =  require('express').Router()
const { fork } = require('child_process')

random_router.get('/', ( req, res) => {
    console.log('INFO', process.pid)
    const cant = req.query.cant || 500000000
    
    const result = {}
        for (let i=0; i<cant; i++) {
            const num = Math.ceil(Math.random()*1000)
            if (num in result) result [num]++
            else result[num] = 1
        }

        return res.json(result)
    
})

module.exports = random_router