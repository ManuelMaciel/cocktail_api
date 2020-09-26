const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
//app.set('port', proccess.env.PORT || 3000);
app.set('port', 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({exdended: false}));
app.use(express.json());

//routes
app.use(require('./routes/index'));
app.use('/api' ,require('./routes/drink'));

//start the server
app.listen(app.get('port'), () => {
  console.log('Server on');
});
