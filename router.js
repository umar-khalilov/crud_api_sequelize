const { Router } = require('express');
const router = Router();
router.get('/',(req,res,next)=>{
    res.send('ok')
})
module.exports = router;