const port =  3000;
const app = require('./app');
const { db } = require('./db');

const startServer = async () => {
    try {
        await db.sync();
        app.listen(port, ()=> console.log(`listening on port ${port}`));
    } catch (err) {
        console.log('There was an error starting up!', err);
    }
};

startServer();

