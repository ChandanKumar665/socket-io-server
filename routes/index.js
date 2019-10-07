const express = require('express');
const router = express.Router();

// @METHOD GET
// route 
// public
router.get('', (req, res) => {
    res.status(200).json({msg: 'I am alive', success: true});
})

module.exports = router;