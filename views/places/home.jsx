var React = require ('react');
var DefaultLayout = require('../default');



class Home extends React.Component {
    render() {
        // console.log("Values in this props logged :", this.props.logged);
        const allPlaces = this.props.all.map((data,index) =>{
            let editLink = `/places/edit/${data.id}`;
            let delLink = `/places/delete/${data.id}?_method=DELETE`;
            let imgLink = `http://res.cloudinary.com/dhapevpz3/image/upload/${data.img_url}`;
            return <div className="p-3 mb-5 bg-light"key = {index}>
                    <h4 className="text-center"> {data.place_name} </h4>
                    <div className="d-flex justify-content-center" >
                    <img className = "img-fluid m-3" src={imgLink} alt="place_pic"/>
                    </div>
                        <div className = "mx-5 px-4">
                        <p> Address: {data.address} </p>
                        <p> Amenities: {data.amenities} </p>
                        <p> Opening hours: {data.open_hours} </p>
                        </div>
                        <div className="my-2 mx-5 px-3 text-right">
                                <button className="btn btn-info mx-3" type="submit"><a className="text-white" href={editLink}>Edit</a></button>
                            <form className="edit-form" method="POST" action={delLink}>
                                <button className="btn btn-danger " type="submit">Delete</button>
                            </form>

                        </div>
                   </div>

        })
        return(
            <DefaultLayout>
                    <div className = "container mt-5">
                        <div className = "row">
                            <div className = "container col-3 p-3 bg-light" id="filter">
                                <form className="p-3" action="/places/search">
                                    <h4> Filter by:</h4>
                                        <label>Area:</label>
                                            <select className="form-control my-2" name="area">
                                              <option> select area </option>
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
                                                <input type="checkbox" className="form-check-input" name="amenities" value="Power Outlets"/>
                                                <label className="form-check-label">Power-Outlets</label>
                                                </div>
                                                <div className="form-check">
                                                <input type="checkbox" className="form-check-input" name="amenities" value="Aircon"/>
                                                <label className="form-check-label">Aircon</label>
                                                </div>
                                            </div>

                                            <div className= "my-3">
                                                <label>Opening Hours:</label>
                                                <div className="form-check">
                                                <input type="checkbox" className="form-check-input" name="open_hours" value="24/7"/>
                                                <label className="form-check-label">24/7</label>
                                                </div>
                                                <div className="form-check">
                                                <input type="checkbox" className="form-check-input" name="open_hours" value="not 24/7"/>
                                                <label className="form-check-label">Not 24/7</label>
                                                </div>

                                            </div>

                                            <div className="my-4 text-center">
                                                <button type="submit" className="btn btn-primary">Filter</button>
                                            </div>
                                            <div className="my-3 text-center" >
                                                <button className="btn btn-primary add-btn" > <a href="/places/new"> Add New Study Place</a></button>
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