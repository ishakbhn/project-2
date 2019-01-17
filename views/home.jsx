var React = require ('react');
var DefaultLayout = require('./default');

class Home extends React.Component {
    render() {

        const allPlaces = this.props.all.map((data,index) =>{
            return <div key = {index}>
                    <h4> {data.place_name} </h4>
                    <img src= {data.img_url} alt="place_pic"/>
                    <p> Address: {data.address} </p>
                    <p> Amenities: {data.amenities} </p>
                    <p> Opening hours: {data.open_hours} </p>
                   </div>

        })
        return(
            <DefaultLayout>
                    <div className = "container mt-3">
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