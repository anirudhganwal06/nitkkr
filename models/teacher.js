const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    userid : {
        type: String,
        required: true
    },
	name : {
        type: String,
        required: true
    },
	email : {
        type: String,
        required: true
    },
	password : {
        type: String,
        required: true
    },
	subject : {
        type: String,
        required: true
    },
    totalAttendance : {
        type : Number,
        default : 0
    }
});

module.exports = mongoose.model('Teacher', teacherSchema);




// const getDb = require('../utils/database').getDb;

// class Teacher {
//     constructor(userid, name, email, password) {
//         this.userid = userid;
//         this.name = name;
//         this.email = email;
//         this.password = password;
//     }

//     save() {
//         const db = getDb();
//         return db.collection('teachers')
//             .insertOne(this)
//             .then(result => {
//                 console.log(result);
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }
// }

// module.exports = Teacher;



// const Sequelize = require('sequelize');

// const sequelize = require('../utils/database');

// const Teacher = sequelize.define('teacher', {
//     userid : {
//         type : Sequelize.STRING,
//         allowNull : false,
//         primaryKey : true
//     },
//     name : {
//         type : Sequelize.STRING,
//         allowNull : false
//     },
//     password : {
//         type : Sequelize.STRING,
//     },
//     email : {
//         type : Sequelize.STRING,
//     },
//     subjectid : {
//         type : Sequelize.STRING,
//     }
// });

// module.exports = Teacher;