const mongoose = require('mongoose');
/*
const pictures = ['https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lionel-animals-to-follow-on-instagram-1568319926.jpg?crop=0.922xw:0.738xh;0.0555xw,0.142xh&resize=640:*', 'https://static.boredpanda.com/blog/wp-content/uuuploads/cute-baby-animals/cute-baby-animals-10.jpg', 'https://i.pinimg.com/originals/63/4d/1a/634d1a2b6ba54fd729a9690fab614ba1.jpg', 'https://media4.newsnationtv.com/resize/930_-/images/2019/10/04/lois-607.jpg'];
const randomNumber = Math.floor(Math.random() * (pictures.length - 1));
*/
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    username: {
        type: String,
        unique: true,
        required: [true, 'Username is required'],
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required'],
    },
    password: {
        type: String,
        minlength: 8,
        required: [true, 'Password is required'],
    },
    image: {
        type: String,
        //default: pictures[randomNumber],
    },
    memberSince: {
        type: Date,
        default: Date.now,
    },
    mealLists: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MealList',
    }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
