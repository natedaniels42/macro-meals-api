const db = require('../models');

const show = (req, res) => {
    db.User.findById(req.params.id, (err, foundUser) => {
        if (err) console.log('Error in users show: ', err);

        res.status(200).send(foundUser);
    })
}

module.exports = {
    show,
}