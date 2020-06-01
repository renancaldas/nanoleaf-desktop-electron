const axios = require("axios");
const { baseUrl, authToken } = require("../config");

const getAllLightControllerInfo = () =>
  new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: `${baseUrl}/${authToken}`,
    })
      .then(({ data, status }) => {
        console.log(`::: Server ::: Status ${status}: `, data);
        resolve(data);
      })
      .catch(reject);
  });

module.exports = {
  getAllLightControllerInfo,
};
