"use strict";

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Page Not Found</h1>
                <p>Sorry, page could not be found.</p>
                <p><Link to="app">Back to Home Page</Link></p>
            </div>
        );
    }
});

module.exports = NotFoundPage;