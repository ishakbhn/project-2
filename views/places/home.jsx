var React = require ('react');
var DefaultLayout = require('../default');

class Home extends React.Component {
    render() {

        const allPlaces = this.props.all.map((data,index) =>{
            return <div className="p-3 mb-5 bg-light"key = {index}>
                    <h4 className="text-center"> {data.place_name} </h4>
                    <div className="d-flex justify-content-center" >
                    <img className = "img-fluid m-3" src= {data.img_url} alt="place_pic"/>
                    </div>
                    <div className = "mx-5 px-4">
                        <p> Address: {data.address} </p>
                        <p> Amenities: {data.amenities} </p>
                        <p> Opening hours: {data.open_hours} </p>
                    </div>
                   </div>

        })
        return(
            <DefaultLayout>
                    <div className = "container mt-5">
                        <div className = "row">
                            <div className = "container col-3 bg-light" id="filter">
                                <form className="p-3" action="/places/filter" method="POST">
                                    <h4> Filter by:</h4>
                                        <label>Area:</label>
                                            <select className="form-control" name="area">
                                              <option value="1">North</option>
                                              <option value="2">East</option>
                                              <option value ="3">South</option>
                                              <option value="4">West</option>
                                            </select>

                                            <div className= "my-3">
                                                <label>Amenities:</label>
                                                <div className="form-check">
                                                <input type="checkbox" className="form-check-input" name="amenities" value="Wifi"/>
                                                <label className="form-check-label">Wifi</label>
                                                </div>
                                                <div className="form-check">
                                                <input type="checkbox" className="form-check-input" name="amenities" value="Power-point"/>
                                                <label className="form-check-label">Power-point</label>
                                                </div>
                                                <div className="form-check">
                                                <input type="checkbox" className="form-check-input" name="amenities" value="Aircon"/>
                                                <label className="form-check-label">Aircon</label>
                                                </div>
                                            </div>

                                            <div className="my-3 text-right">
                                                <button type="submit" className="btn btn-primary">Filter</button>
                                            </div>
                                </form>
                            </div>
                                <div className = "col-9">
                                    {allPlaces}
                                </div>
                        </div>
                    </div>
            </DefaultLayout>
        )
    }
}

module.exports = Home;