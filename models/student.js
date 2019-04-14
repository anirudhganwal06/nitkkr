const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
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
	branch : {
        type: String,
        required: true
    },
	semester : {
        type: String,
        required: true
    },
	marks : {
		midsem1 : {
			ph : Number,
			ch : Number,
			ma : Number,
			dc1 : Number,
			dc2 : Number,
			dc3 : Number,
			wd : Number,
			eco : Number
		},
		midsem2 : {
			ph : Number,
			ch : Number,
			ma : Number,
			dc1 : Number,
			dc2 : Number,
			dc3 : Number,
			wd : Number,
			eco : Number
		},
		endsem : {
			ph : Number,
			ch : Number,
			ma : Number,
			dc1 : Number,
			dc2 : Number,
			dc3 : Number,
			wd : Number,
			eco : Number
		}
	},
	attendance : {
		ph : {
			type : Number,
			default : 0 
		},
		ch : {
			type : Number,
			default : 0 
		},
		ma : {
			type : Number,
			default : 0 
		},
		dc1 : {
			type : Number,
			default : 0 
		},
		dc2 : {
			type : Number,
			default : 0 
		},
		dc3 : {
			type : Number,
			default : 0 
		},
		wd : {
			type : Number,
			default : 0 
		},
		eco : {
			type : Number,
			default : 0 
		}
	} 
});

module.exports = mongoose.model('Student', studentSchema);

// const getDb = require('../utils/database').getDb;

// class Student {
//     constructor(userid, name, email, password, branch, semester) {
//         this.userid = userid;
//         this.name = name;
//         this.email = email;
//         this.password = password;
//         this.branch = branch;
//         this.semester = semester;
//     }

//     save() {
//         const db = getDb();
//         return db.collection('students')
//             .insertOne(this)
//             .then(result => {
//                 console.log(result);
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }

//     update() {
//         const db = db();
//         db.collection('students').findAll({userid : this.userid}).toArray()
//             .then(students => {
//                 if (students.length == 1) {
//                     return db.collection('students').updateOne({userid : this.userid}, {$set : this});
//                 }
//             })
//     }

//     static findById(userid) {
//         const db = getDb();
//         return db.collection('students')
//             .find({userid : userid})
//             .next()
//             .then(product => {
//                 console.log(product);
//                 return product;
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }
// }

// module.exports = Student;

// const Student = sequelize.define('student', {
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
//     branch : {
//         type : Sequelize.STRING,
//         allowNull : false
//     },
//     semester : {
//         type : Sequelize.INTEGER,
//         allowNull : false
//     },
//     maMarks1 : {
//         type : Sequelize.INTEGER
//     },
//     phMarks1 : {
//         type : Sequelize.INTEGER
//     },
//     chMarks1 : {
//         type : Sequelize.INTEGER
//     },
//     dc1Marks1 : {
//         type : Sequelize.INTEGER
//     },
//     dc2Marks1 : {
//         type : Sequelize.INTEGER
//     },
//     dc3Marks1 : {
//         type : Sequelize.INTEGER
//     },
//     eeMarks1 : {
//         type : Sequelize.INTEGER
//     },
//     wdMarks1 : {
//         type : Sequelize.INTEGER
//     },
//     maMarks2 : {
//         type : Sequelize.INTEGER
//     },
//     phMarks2 : {
//         type : Sequelize.INTEGER
//     },
//     chMarks2 : {
//         type : Sequelize.INTEGER
//     },
//     dc1Marks2 : {
//         type : Sequelize.INTEGER
//     },
//     dc2Marks2 : {
//         type : Sequelize.INTEGER
//     },
//     dc3Marks2 : {
//         type : Sequelize.INTEGER
//     },
//     eeMarks2 : {
//         type : Sequelize.INTEGER
//     },
//     wdMarks2 : {
//         type : Sequelize.INTEGER
//     },
//     maMarks3 : {
//         type : Sequelize.INTEGER
//     },
//     phMarks3 : {
//         type : Sequelize.INTEGER
//     },
//     chMarks3 : {
//         type : Sequelize.INTEGER
//     },
//     dc1Marks3 : {
//         type : Sequelize.INTEGER
//     },
//     dc2Marks3 : {
//         type : Sequelize.INTEGER
//     },
//     dc3Marks3 : {
//         type : Sequelize.INTEGER
//     },
//     eeMarks3 : {
//         type : Sequelize.INTEGER
//     },
//     wdMarks3 : {
//         type : Sequelize.INTEGER
//     },
//     maAttendance : {
//         type : Sequelize.INTEGER
//     },
//     phAttendance : {
//         type : Sequelize.INTEGER
//     },
//     chAttendance : {
//         type : Sequelize.INTEGER
//     },
//     dc1Attendance : {
//         type : Sequelize.INTEGER
//     },
//     dc2Attendance : {
//         type : Sequelize.INTEGER
//     },
//     dc3Attendance : {
//         type : Sequelize.INTEGER
//     },
//     eeAttendance : {
//         type : Sequelize.INTEGER
//     },
//     wdAttendance : {
//         type : Sequelize.INTEGER
//     },
//     maAttendanceT : {
//         type : Sequelize.INTEGER
//     },
//     phAttendanceT : {
//         type : Sequelize.INTEGER
//     },
//     chAttendanceT : {
//         type : Sequelize.INTEGER
//     },
//     dc1AttendanceT : {
//         type : Sequelize.INTEGER
//     },
//     dc2AttendanceT : {
//         type : Sequelize.INTEGER
//     },
//     dc3AttendanceT : {
//         type : Sequelize.INTEGER
//     },
//     eeAttendanceT : {
//         type : Sequelize.INTEGER
//     },
//     wdAttendanceT : {
//         type : Sequelize.INTEGER
//     }
// });
