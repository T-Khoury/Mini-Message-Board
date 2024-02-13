const express = require('express');

const router = express.Router();

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

// GET home page

router.get('/', (req, res, next) => {
    res.render('index', { title: "Mini Messageboard", messages: messages })
})

router.get('/new', (req, res, next) => {
    res.render('form', { title: "New Message" })
})

// new message

router.post('/new', (req, res, next) => {
    const messageText = req.body.message;
    const messageAuthor = req.body.author;
    messages.push({text: messageText, user: messageAuthor, added: new Date()});

    res.redirect('/');
})

module.exports = router;