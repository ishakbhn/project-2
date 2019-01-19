var React = require('react');
var DefaultLayout = require('../default');

class NewForm extends React.Component {
    render() {
        return(
        <DefaultLayout>
            <div className="form-wrapper mt-5">
                <div className="container form-main">
                    <div className="row form-container justify-content-center">
                        <div className="col-md-6 col-md-offset-3 bg-secondary rounded p-3">
                            <h1 className="text-center">Registration Form</h1>
                                <form  action="/users/new" method="post" >
                                    <div className="form-group">
                                        <label>Name:</label>
                                        <input name= "name" type="text" className="form-control required" placeholder="name" required/>
                                    </div>
                                    <div className="form-group">
                                        <label>Username:</label>
                                        <input name= "username" type="email" className="form-control required" placeholder="Enter email" required/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password:</label>
                                        <input name= "password" type="password" className="form-control" placeholder="Password" required/>
                                    </div>
                                    <div className="row justify-content-center">
                                     <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
        )
    }
}

module.exports = NewForm;