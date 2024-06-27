const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
    "mongodb+srv://<username>:<password>@cluster0.tn2fkag.mongodb.net/<dbName>?retryWrites=true&w=majority&appName=Cluster0";

let dbURL = uri.replace("<username>", process.env.DB_USERNAME);
dbURL = dbURL.replace("<password>", process.env.DB_PASSWORD);
dbURL = dbURL.replace("<dbName>", process.env.DB_NAME);

const client = new MongoClient(dbURL, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

const database = client.db(process.env.DB_NAME);
const productsCollection = database.collection("products");

module.exports = {
    productsCollection,
};
