const router = require('express').Router();
const upload = require('./../middlewares/file_upload');

router.post('/single', upload.single('image'), async function(req, res) {
    const uploadFile = req.file;

    if(!uploadFile) {
        res.json({
            success: false,
            error: "file-not-uploaded"
        });
        return;
    }
    res.json({
        success: true,
        url: "http://localhost:5000/"+uploadFile.filename,
        data: uploadFile
    });
});

module.exports = router;
