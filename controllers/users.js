module.exports = (db) => {

    let createForm = (req, res) => {
        res.render('users/register');
    };

    let registerUser = (req, res) => {
        db.users.newUser(req.body, (err,queryResult) =>{
                res.redirect('/places')
        });
    };

    let logForm = (req,res) => {
        res.render('users/login');
    };

    let checkLogin = (req,res)=> {

        db.users.logIn(req.body,(error,queryResult)=> {
            if(error){
                console.log("There is an error!", error);
            } else {
                let usersDb = queryResult;
                let username = req.body.username;
                let password = db.users.hash(req.body.password);
                    for (let i=0; i < usersDb.length; i++) {
                            //iterate thru the users Table
                            //check is username exist
                            if (usersDb[i].username === username) {
                                //if username exist check password
                                if(usersDb[i].password === password) {
                                    res.cookie('loggedin', {
                                        userId: usersDb[i].id,
                                        name: usersDb[i].name,
                                        username: usersDb[i].username,
                                        pwd: password })
                                    res.render('places/home',);
                                    return
                                } else {
                                    let wrongAuth = "Wrong Password";
                                    console.log({change:wrongAuth});
                                    // res.render('login',{change:wrongAuth});
                                    res.send("Wrong password");
                                    return;
                                }
                             //if username did not exist
                            } else {
                                res.send("Please register!!");
                                return;
                            }
                    }
            }
        });
    };

    return {
        createForm,
        registerUser,
        logForm,
        checkLogin,
    };
};