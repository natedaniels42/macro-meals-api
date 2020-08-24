const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models');

const register = async (req, res) => {
    if (!req.body.username || !req.body.email || !req.body.password) {
        return res.status(400).json({message: 'All fields are required. Please try again'});
    }

    if (req.body.password.length < 8) {
        return res.status(400).json({message: 'Password must be at least 8 characters long'});
    }

    try {
        const foundUser = await db.User.findOne({ email: req.body.email });

        if (foundUser) {
            res.status(400).json({
                status: 400,
                message: 'Email address has already been registered. Please try again',
            });
        }
        const salt = await bcrypt.genSalt(10);

        const hash = await bcrypt.hash(req.body.password, salt);

        await db.User.create({ ...req.body, password: hash });

        return res.status(201).json({status: 201, message: 'success'});
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 500,
            message: 'Something went wrong. Please try again',
        });
    }
};

module.exports = {
    register,
};