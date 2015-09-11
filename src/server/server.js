import express  from "express";
import React    from "react";
import Router   from "react-router";

const app = express();

// set up Jade
app.set('views', './views');
app.set('view engine', 'jade');

// serving static assets
app.use(express.static(__dirname + 'dist/assets'));

import routes from "../shared/routes";

app.get('/*', function (req, res) {
  Router.run(routes, req.url, Handler => {
    let content = React.renderToString(<Handler />);
    res.render('layout', { content: content });
  });
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
