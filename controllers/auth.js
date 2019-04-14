// const nodemailer = require('nodemailer');
// const sendgridTransport = require('nodemailer-sendgrid-transport');
const flash = require('connect-flash');


const Student = require('../models/student');
const Teacher = require('../models/teacher');



// const transporter = nodemailer.createTransport(sendgridTransport({
//     auth : {
//         api_key : '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'
//     }
// }));

exports.getLogin = (req, res, next) => {
    res.render('auth/loginPage', {
        req : req,
        pageTitle: 'Login'
    });
};

exports.postLogin = (req, res, next) => {
    const usertype = req.body.usertype;
    const userid = req.body.userid;
    const password = req.body.password;
    if (usertype === 'student') {
        Student.findOne({userid: userid})
            .then(student => {
                if (student.password === password) {
                    req.session.isLoggedIn = true;
                    req.session.userid = student.userid;
                    req.session.usertype = usertype;
                    return req.session.save(err => {
                        res.redirect('/' + usertype + '/' + userid);
                    });    
                } else {
                    res.redirect('/login');
                }
            })
            .catch(err => {
                res.redirect('/login');
            });
    } else if (usertype === 'teacher') {
        Teacher.findOne({userid: userid})
            .then(user => {
                if (user.password === password) {
                    req.session.isLoggedIn = true;
                    req.session.userid = userid;
                    req.session.usertype = usertype;
                    return req.session.save(err => {
                        res.redirect('/' + usertype + '/' + userid);
                    });    
                } else {
                    res.redirect('/login');
                }
            })
            .catch(err => {
                    res.redirect('/login');
                    console.log(err);
            });
    }
    //  else if (usertype === 'parent') {
    //     Parent.find({where : {userid : userid}})
    //         .then(parent => {
    //                 if (usertype.password === password) {
    //                     req.session.isLoggedIn = true;
    //                     req.session.userid = userid;
    //                     req.session.usertype = usertype;
    //                     console.log('student.userid : ', userid);
    //                     return req.session.save(err => {
    //                         // console.log(err);
    //                     console.log('params : ', req.session.isLoggedIn);
    //                     console.log('session : ', req.session.user);
    //                     console.log('usertype : ', usertype);
    //                     res.redirect('/' + usertype + '/' + userid);
    //                 });    
    //             } else {
    //                 res.redirect('/login');
    //             }
    //         })
    //         .catch(err => {
    //             res.redirect('/login');
    //             // console.log(err);
    //         });
    // }        
};

exports.postLogout = (req, res, next) => {
    req.session.destroy(err => {
        console.log(err);
        res.redirect('/');
    });
};

exports.getChangePassword = (req, res, next) => {
    res.render('auth/changePassword', {
        req : req,
        pageTitle : 'Change Password',
        // errorMessage : req.flash('error')
    });
};

exports.postChangePassword = (req, res, next) => {
    usertype = req.body.usertype;
    userid = req.body.userid;
    oldPassword = req.body.oldPassword;
    newPassword = req.body.newPassword;
    confirmNewPassword = req.body.confirmNewPassword;
    if (usertype === 'student') {
        Student.findOne({userid: userid})
        .then(student => {
            if (student.password === oldPassword) {
                student.password = newPassword;
                student.save();
            } else {
                console.log('Old Password Incorrect!');
            }
        })
        .catch(err => {
            console.log('Invalid Userid');
            console.log(err);
        });
    } else if (usertype === 'teacher') {
        Teacher.findOne({userid: userid})
        .then(teacher => {
            if (teacher.password === oldPassword) {
                teacher.password = newPassword;
                console.log(teacher);
                teacher.save();
            } else {
                console.log('Old Password Incorrect!');
            }
        })
        .catch(err => {
            console.log('Invalid Userid');
            console.log(err);
        });
    }
    res.redirect('/login');
};