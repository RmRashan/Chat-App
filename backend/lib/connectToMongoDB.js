const mongo = require('mongoose')

const connectToMongoDB = async () => {
    
try {
    await mongo.connect(process.env.MONGO_DB_URL);
    console.log(" mongoose connect");

} catch (error) {
 console.log(error);   
}

}


module.exports = connectToMongoDB;