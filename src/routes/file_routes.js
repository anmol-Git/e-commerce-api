const router = require('express').Router();
const upload = require('./../middlewares/file_upload');

router.post('/single', upload.single(), async function(req, res) {
    const uploadFile = req.file;
});

module.exports = router;
