
const { connect, disconnect, connection } = require('mongoose');

const dbUrls = {
    local: "mongodb://localhost:27017/reactcrud",
};

let env = process.env.ENV || "local";

env = (dbUrls[env] && env) || "local"; // if no url configured for env then connect to local env

const db = {
    url: dbUrls[env],
    options: {
        useNewUrlParser: true,
        useCreateIndex: true,
    },
};
class Mongodb {
    constructor () { }
    static open() {
        return new Promise((resolve, reject) => {
            connect(db.url, db.options);
            connection.on("connected", async () => {
                console.log("Mongoose default connection is open to ", db.url);
                resolve();
            });

            connection.on("error", (err) => {
                reject(err);
            });

            connection.on("disconnected", () => {
                console.log("Mongoose default connection is disconnected");
            });
			/* 
        process.on('SIGINT', () => {
            mongoose.connection.close(() => {
                console.log(termination("Mongoose default connection is disconnected due to application termination"));
                process.exit(0);
            });
        }); */
        });
    }

    close() {
        disconnect(db.url, db.options);
    }
}

module.exports = Mongodb;