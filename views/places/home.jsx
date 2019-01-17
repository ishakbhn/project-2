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
                                <form className="p-3">
                                    <p>Filter By:</p>
                                    <div className="form-check">
                                        <p> Area </p>
                                        <input type="checkbox" className="form-check-input" name="west"/>
                                        <label className="form-check-label">West</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Filter</button>
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

// <div className="px-3 mb-5"key = {index}>

// return <div className="p-3 mb-5 bg-light"key = {index}>
//                     <h4 className="text-center"> {data.place_name} </h4>
//                     <div className="d-flex justify-content-center">
//                     <img className = "m-3" src= {data.img_url} alt="place_pic"/>
//                     </div>
//                     <div className = "mx-5 px-4">
//                         <p> Address: {data.address} </p>
//                         <p> Amenities: {data.amenities} </p>
//                         <p> Opening hours: {data.open_hours} </p>
//                     </div>
//                    </div>