const Student = require('../models/student');
const Teacher = require('../models/teacher');

exports.getStudentPersonalInfo = (req, res, next) => {
    userid = req.params.userid;
    Student.findOne({userid: userid})
        .then(student => {
            res.render('student/personalInfo', {
                pageTitle: 'Personal Info',
                req : req,
                user : student
            });
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getMarksOfStudent = (req, res, next) =>{
    userid = req.params.userid;
    subjectNames = ['Physics', 'Chemistry', 'Mathematics', 'DC - 1', 'DC - 2', 'DC - 3', 'Web Designing', 'Economics'];
    Student.findOne({userid: userid})
        .then(student => {
            res.render('student/marks', {
                pageTitle: 'Marks',
                req : req,
                user : student,
                subjectNames : subjectNames
            });
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getAttendanceOfStudent = (req, res, next) =>{
    userid = req.params.userid;
    let subjectNames = ['Physics', 'Chemistry', 'Mathematics', 'DC - 1', 'DC - 2', 'DC - 3', 'Web Designing', 'Economics'];
    let totalAttendance = [];
    let i = 0;
    Teacher.find()
        .then(teachers => {
            for (let teacher of teachers) {
                totalAttendance[i++] = teacher.totalAttendance;
            }
            return totalAttendance;
        })
        .then(() => {
            Student.findOne({userid: userid})
            .then(student => {
                res.render('student/attendance', {
                    pageTitle: 'Attendance',
                    req : req,
                    user : student,
                    totalAttendance : totalAttendance,
                    subjectNames : subjectNames
                });
            })
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getTeacherPersonalInfo = (req, res, next) => {
    userid = req.params.userid;
    Teacher.findOne({userid: userid})
        .then(teacher => {
            res.render('teacher/personalInfo', {
                pageTitle: 'Personal Info',
                req : req,
                user : teacher
            });
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getAddAttendance = (req, res, next) => {
    userid = req.params.userid;
    let studentUserIds = [];
    let studentNames = [];
    let k = 0;
    Student.find()
    .then(students => {
        for (student of students) {
            studentUserIds[k] = student.userid;
            studentNames[k] = student.name;
            k++;
        }
    })
    .then(() => {
        Teacher.findOne({userid: userid})
            .then(teacher => {
                res.render('teacher/addAttendance', {
                    pageTitle: 'Add Attendance',
                    req : req,
                    user : teacher,
                    studentUserIds : studentUserIds,
                    studentNames : studentNames,
                });
            })
            .catch(err => {
                console.log(err);
            });

    })
    .catch(err => {
        console.log(err);
    });
};

exports.postAddAttendance = (req, res, next) => {
    userid = req.params.userid;
    presentStudents = req.body.presentStudents;
    Teacher.findOne({userid : userid})
        .then(teacher => {
            teacher.totalAttendance += 1;
            teacher.save();
            return teacher.subject;
        })
        .then(subject => {
            Student.find()
                .then(students => {
                    let i=0;
                    for (let student of students) {
                        if (student.userid === presentStudents[i]) {
                            if (subject === 'ph')
                                student.attendance.ph += 1;
                            else if (subject === 'ch')
                                student.attendance.ch += 1;
                            else if (subject === 'ma')
                                student.attendance.ma += 1;
                            else if (subject === 'dc1')
                                student.attendance.dc1 += 1;
                            else if (subject === 'dc2')
                                student.attendance.dc2 += 1;
                            else if (subject === 'dc3')
                                student.attendance.dc3 += 1;
                            else if (subject === 'wd')
                                student.attendance.wd += 1;
                            else if (subject === 'eco')
                                student.attendance.eco += 1;
                            i++;    
                            student.save();
                        }
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        })
        .catch(err => {
            console.log(err);
        });   
    res.redirect('/teacher/' + userid + '/add-attendance');
};

exports.getAddMarks = (req, res, next) => {
    userid = req.params.userid;
    let k = 0;
    let studentUserIds = [];
    let studentName = [];
    Student.find()
    .then(students => {
        for (student of students) {
            studentUserIds[k] = student.userid;
            studentName[k] = student.name;
            k++;
        }
    })
    .then(() => {
        Teacher.findOne({userid : userid})    
        .then(teacher => {
            res.render('teacher/addMarks', {
                pageTitle: 'Add Marks',
                req : req,
                user : teacher,
                studentUserIds : studentUserIds,
                studentName : studentName
            });
        })
        .catch(err => {
            console.log(err);
        });
    })
    .catch(err => {
        console.log(err);
    });
};

exports.postAddMarks = (req, res, next) => {
    userid = req.session.userid;
    marks = req.body.studentMarks;
    exam = req.body.exam;
    let k = 0;
    Teacher.findOne({userid : userid})
        .then(teacher => {
           return subject = teacher.subject;
        })
        .then(subject => {
            return Student.find()
                .then(students => {
                    for (let student of students) {
                        if (exam === 'midsem1') {
                            if (subject == 'ph')
                                student.marks.midsem1.ph = marks[k++]; 
                            else if (subject == 'ch')   
                                student.marks.midsem1.ch = marks[k++];  
                            else if (subject == 'ma')   
                                student.marks.midsem1.ma = marks[k++];  
                            else if (subject == 'dc1')   
                                student.marks.midsem1.dc1 = marks[k++];  
                            else if (subject == 'dc2')   
                                student.marks.midsem1.dc2 = marks[k++];  
                            else if (subject == 'dc3')   
                                student.marks.midsem1.dc3 = marks[k++];  
                            else if (subject == 'wd')   
                                student.marks.midsem1.wd = marks[k++];  
                            else if (subject == 'eco')   
                                student.marks.midsem1.eco = marks[k++];      
                        } else if (exam === 'midsem2') {
                            if (subject == 'ph')
                                student.marks.midsem2.ph = marks[k++]; 
                            else if (subject == 'ch')   
                                student.marks.midsem2.ch = marks[k++];  
                            else if (subject == 'ma')   
                                student.marks.midsem2.ma = marks[k++];  
                            else if (subject == 'dc1')   
                                student.marks.midsem2.dc1 = marks[k++];  
                            else if (subject == 'dc2')   
                                student.marks.midsem2.dc2 = marks[k++];  
                            else if (subject == 'dc3')   
                                student.marks.midsem2.dc3 = marks[k++];  
                            else if (subject == 'wd')   
                                student.marks.midsem2.wd = marks[k++];  
                            else if (subject == 'eco')   
                                student.marks.midsem2.eco = marks[k++]; 

                        } else if (exam === 'endsem') {
                            if (subject == 'ph')
                                student.marks.endsem.ph = marks[k++]; 
                            else if (subject == 'ch')   
                                student.marks.endsem.ch = marks[k++];  
                            else if (subject == 'ma')   
                                student.marks.endsem.ma = marks[k++];  
                            else if (subject == 'dc1')   
                                student.marks.endsem.dc1 = marks[k++];  
                            else if (subject == 'dc2')   
                                student.marks.endsem.dc2 = marks[k++];  
                            else if (subject == 'dc3')   
                                student.marks.endsem.dc3 = marks[k++];  
                            else if (subject == 'wd')   
                                student.marks.endsem.wd = marks[k++];  
                            else if (subject == 'eco')   
                                student.marks.endsem.eco = marks[k++]; 
                        }
                        student.save();
                    }
                })
        })
        .then(() => {
            res.redirect('/teacher/' + userid);
        })
        .catch(err => {
            console.log(err);
        });
};