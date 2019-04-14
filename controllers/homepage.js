const Student = require('../models/student');
const Teacher = require('../models/teacher');

exports.getHomepage = (req, res, next) => {
    if(req.session.isLoggedIn) {
        userid = req.session.userid;
        usertype = req.session.usertype;
        if (usertype === 'student') {
            Student.findOne({userid: userid})
            .then(student => {
                res.render('homePage', {
                    pageTitle: 'Homepage',
                    req : req,
                    user : student
                });
            })
            .catch(err => {
                console.log(err);
            });
        } else if (usertype === 'teacher') {
            Teacher.findOne({userid: userid})
                .then(teacher => {
                    res.render('homePage', {
                        pageTitle : 'Homepage',
                        req : req,
                        user : teacher
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        }

    } else {
        res.render('homePage', {
            pageTitle: 'NITK Students Data',
            req : req,
        });
    }
};

exports.getOurDevelopmentTeam = (req, res, next) => {
    res.render('ourDevelopmentTeam', {
        pageTitle: 'Our Development Team',
        req : req
    });
} ;