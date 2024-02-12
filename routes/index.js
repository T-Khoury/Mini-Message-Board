const express = require('express');

const router = express.Router();

// GET home page

router.get('/', (req, res, next) => {
    const messages = [
        {
            text: "Is anyone there?",
            user: "Trevor",
            added: new Date()
        },
        {
            text: "Humans create love",
            user: "serenee",
            added: new Date()
        }
    ];
    res.render('index', { title: "Mini Messageboard", messages: messages })
})

router.get('/new', (req, res, next) => {
    res.render('form', { title: "New Message" })
})

module.exports = router;