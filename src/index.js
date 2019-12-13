const app = require('express');


// listen to requests
app.listen(8080, () => console.info(`server started on port ${port} (${env})`));

/**
* Exports express
* @public
*/
module.exports = app;