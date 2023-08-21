const express = require('express');
const { default: router } = require('./router');
const app = express();
const port = 3000;

router(app);

app.listen(port,() => {
    console.log(`Server is up and running on port:${port}`);
});
