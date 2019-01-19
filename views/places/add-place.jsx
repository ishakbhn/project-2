var React = require ('react');
var DefaultLayout = require('../default');

class CreatePlace extends React.Component {
    render() {
        return(
            <DefaultLayout>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <h1 className="text-center">Registration Form</h1>
                        </div>
                    </div>

                    <div className ="row">
                        <div className="col-sm">

                            <form  action="/places/new" method="post" >
                                <div className="form-group my-3">
                                    <label>Name of place:</label>
                                    <input name= "name" type="text" className="form-control required" placeholder="Jurong East Library" required/>
                                </div>

                                <div className="form-group my-3">
                                    <label>Address:</label>
                                    <input name= "address" type="text" className="form-control required" placeholder="21 Jurong East Central 1, Singapore 609732" required/>
                                </div>

                                <div className="form-group my-3">
                                    <label>Image:</label>
                                    <input name= "img_url" type="text" className="form-control required" placeholder="jurong_east.jpg" required/>
                                </div>

                                <label>Amenities:</label>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" name="amenities" value="Wifi"/>
                                    <label className="form-check-label">Wifi</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" name="amenities" value="Power-point"/>
                                    <label className="form-check-label">Power-outlet</label>
                                </div>
                                 <div className="form-check">
                                    <input type="checkbox" className="form-check-input" name="amenities" value="Aircon"/>
                                    <label className="form-check-label">Aircon</label>
                                </div>

                                <div className="form-group my-3">
                                    <label>Opening hours:</label>
                                    <input name= "open_hours" type="text" className="form-control" placeholder="10am - 9pm" required/>
                                </div>

                                <div>
                                    <label> Area:</label>
                                </div>
                                <div>
                                    <select className="form-control" name="area">
                                        <option> select area </option>
                                        <option value="1">North</option>
                                        <option value="2">East</option>
                                        <option value ="3">South</option>
                                        <option value="4">West</option>
                                    </select>
                                </div>

                                <div className="row justify-content-center my-5">
                                    <button type="submit" className="btn btn-primary">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </DefaultLayout>
        )
    }
}

module.exports = CreatePlace;