var React = require ('react');
var DefaultLayout = require('../default');

class EditForm extends React.Component {
    render() {
        const place = this.props.places;
        const actionPath = `/places/${place.id}?_method=PUT`;

        return(
            <DefaultLayout>
                <div className="container bg-light my-5">
                    <div className="row">
                        <div className="col-sm mt-4">
                            <h1 className="text-center">New Study Place</h1>
                        </div>
                    </div>

                    <div className ="row mx-5">
                        <div className="col-sm">

                            <form  encType="multipart/form-data" action={actionPath} method="POST" >
                                <div className="form-group my-3">
                                    <label>Name of place:</label>
                                    <input name= "name" type="text" className="form-control required" defaultValue={place.place_name} required/>
                                </div>

                                <div className="form-group my-3">
                                    <label>Address:</label>
                                    <input name= "address" type="text" className="form-control required" defaultValue={place.address}required/>
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
                                    <input name= "open_hours" type="text" className="form-control" defaultValue={place.open_hours} required/>
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

module.exports = EditForm;