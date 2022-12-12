const { db } = require ('./index')


const runSeed = async () => {
    await db.sync({force: true});
    console.log("Seeding is complete!");
    process.kill(0);
}

runSeed();