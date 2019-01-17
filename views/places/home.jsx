var React = require ('react');
var DefaultLayout = require('./default');

class Home extends React.Component {
    render() {

        const allPlaces = this.props.all.map((data,index) =>{
            return <div className="px-3 mb-5"key = {index}>
                    <h4> {data.place_name} </h4>
                    <img className = "m-3" src= {data.img_url} alt="place_pic"/>
                    <div className = "ml-3">
                        <p> Address: {data.address} </p>
                        <p> Amenities: {data.amenities} </p>
                        <p> Opening hours: {data.open_hours} </p>
                    </div>
                   </div>

        })
        return(
            <DefaultLayout>
                    <div className = "container mt-4">
                        <div className = "row">
                            <div className = "col-3">
                                <form>
                                    <p>Filter By:</p>
                                    <div className="form-check">
                                        <p> Area </p>
                                        <input type="checkbox" className="form-check-input" name="west"/>
                                        <label className="form-check-label" for="exampleCheck1">West</label>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Filter</button>
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