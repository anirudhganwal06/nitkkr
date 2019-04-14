const Student = require('../models/student');
const Teacher = require('../models/teacher');
const Subject = require('../models/teacher');



exports.getAddStudent = (req, res, next) => {
    res.render('admin/addStudent', {
        isLoggedIn : req.session.isLoggedIn,
        pageTitle : 'Add Student',
        req : req
    });
};

exports.postAddStudent = (req, res, next) => {
    userid = req.body.userid;
    name = req.body.name;
    email = req.body.email;
    password = req.body.password;
    branch = req.body.branch;
    semester = req.body.semester;
    const student = new Student({
        userid : userid,
        name : name,
        email : email,
        password : password,
        branch : branch,
        semester : semester
    });
    student.save()
        .then(result => {
            console.log(result);
            res.redirect('/admin/add-student');
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getAddTeacher = (req, res, next) => {
    res.render('admin/addTeacher', {
        pageTitle : 'Add Teacher',
        req : req
    });
};

exports.postAddTeacher = (req, res, next) => {
    userid = req.body.userid;
    name = req.body.name;
    password = req.body.password;
    email = req.body.email;
    subject = req.body.subject;
    const teacher = new Teacher({
        userid : userid,
        name : name,
        email : email,
        password : password,
        subject : subject
    });
    teacher.save()
    .then(result => {
        console.log(result);
        res.redirect('/admin/add-teacher');
    })
    .catch(err => {
        console.log(err);
    });

};

// exports.getAddSubject = (req, res, next) => {
//     res.render('admin/addSubject', {
//         pageTitle : 'Add Subject',
//         req : req
//     });
// };

// exports.postAddSubject = (req, res, next) => {
//     userid = req.body.userid;
//     name = req.body.name;
//     // teacherUserid = req.body.teacherUserid;
//     const subject = new Subject(userid, name);
//     subject.save()
//     .then(result => {
//         res.redirect('/admin/add-subject');
//     })
//     .catch(err => {
//         console.log(err);
//     });

// };