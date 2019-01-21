var React = require ('react');

class DefaultLayout extends React.Component {
    render() {
        return(
            <html>
                <head>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
                    <link href="https://fonts.googleapis.com/css?family=PT+Sans" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css?family=Amaranth|PT+Sans" rel="stylesheet"/>
                    <link rel="stylesheet" type="text/css" href="/style.css"/>
                </head>
                <body>
                <header>
                <div className = "row m-0">
                    <div className = "col p-0">
                        <h1 className= "text-center header py-3 m-0"> Where to study? </h1>
                    </div>
                </div>
                <div className = "row m-0">
                    <div className = "col p-0">
                        <ul className="nav justify-content-end bg-dark">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/places">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/users/login">Log In</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/users/new">Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
                </header>
                {this.props.children}
                <footer className="text-center text-white bg-dark" >© 2019 Ishak Haron</footer>
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossOrigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossOrigin="anonymous"></script>
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout;