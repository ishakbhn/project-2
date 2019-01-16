var React = require ('react');
var DefaultLayout = require('./default');

class Home extends React.Component {
    render() {

        const allPlaces = this.props.all.map((data,index) =>{
            return <div key = {index}>
                   <p> {data.place_name} </p>
                   <p> {data.address} </p>
                   <p> {data.amenities} </p>
                   <p> {data.open_hours} </p>
                   </div>
        })
        return(
            <DefaultLayout>
                <p>
                {allPlaces}
                </p>
            </DefaultLayout>
        )
    }
}

module.exports = Home;