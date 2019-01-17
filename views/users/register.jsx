var React = require('react');
var DefaultLayout = require('../default');

class NewForm extends React.Component {
    render() {
        return(
        <DefaultLayout>
            <div className="form-wrapper mt-5">
                <div className="form-main container">
                    <div className="form-container row justify-content-center">
                        <div className="col-md-6 col-md-offset-3 bg-secondary rounded">
                            <h1 className="text-center">Registration Form</h1>
                                <form  action="#" method="post" >
                                    <div className="row justify-content-center">
                                    <input className="text" type="text" name="name" placeholder="Name" required=""/>
                                    </div>
                                    <div className="row justify-content-center">
                                    <input className="text" type="text" name="username" placeholder="Username" required=""/>
                                    </div>
                                    <div className="row justify-content-center">
                                    <input className="text" type="text" name="password" placeholder="Password" required=""/>
                                    </div>
                                    <div className="row justify-content-center">
                                    <input type="submit" value="Register"/>
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