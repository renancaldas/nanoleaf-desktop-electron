const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./server/db.json");
const db = low(adapter);

const defaultDB = {
  config: {
    ip: null,
    token: null,
  },
};

db.defaults(defaultDB).write();

const getConfig = () =>
  new Promise((resolve, reject) => {
    resolve(db.get("config").value());
  });

const setConfig = ({ ip, token }) =>
  new Promise((resolve, reject) => {
    db.set("config.ip", ip).set("config.token", token).write();
    resolve({});
  });

module.exports = {
  getConfig,
  setConfig,
};
