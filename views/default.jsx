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
                    <link rel="stylesheet" type="text/css" href="/style.css"/>
                </head>
                <body>
                {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout;