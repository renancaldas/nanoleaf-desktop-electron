const axios = require("axios");
const { baseUrl, authToken } = require("../config");

const getAllLightControllerInfo = () =>
  new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: `${baseUrl}/${authToken}`,
    })
      .then(({ data, status }) => {
        console.log(
          `::: Server ::: getAllLightControllerInfo ${status}: `,
          data
        );
        resolve(data);
      })
      .catch(reject);
  });

const toggleLight = (value) =>
  new Promise((resolve, reject) => {
    axios({
      method: "put",
      url: `${baseUrl}/${authToken}/state`,
      data: { on: { value } },
    })
      .then(({ data, status }) => {
        console.log(`::: Server ::: toggleLight ${status}: `, data);
        getAllLightControllerInfo().then(resolve);
      })
      .catch(reject);
  });

const setBrightness = (value) =>
  new Promise((resolve, reject) => {
    axios({
      method: "put",
      url: `${baseUrl}/${authToken}/state`,
      data: { brightness: { value, duration: 0 } },
    })
      .then(({ data, status }) => {
        console.log(`::: Server ::: setBrightness ${status}: `, data);
        getAllLightControllerInfo().then(resolve);
      })
      .catch(reject);
  });

const setHue = (value) =>
  new Promise((resolve, reject) => {
    axios({
      method: "put",
      url: `${baseUrl}/${authToken}/state`,
      data: { hue: { value } },
    })
      .then(({ data, status }) => {
        console.log(`::: Server ::: setBrightness ${status}: `, data);
        getAllLightControllerInfo().then(resolve);
      })
      .catch(reject);
  });

const setSaturation = (value) =>
  new Promise((resolve, reject) => {
    axios({
      method: "put",
      url: `${baseUrl}/${authToken}/state`,
      data: { sat: { value } },
    })
      .then(({ data, status }) => {
        console.log(`::: Server ::: setBrightness ${status}: `, data);
        getAllLightControllerInfo().then(resolve);
      })
      .catch(reject);
  });

const setEffect = (value) =>
  new Promise((resolve, reject) => {
    axios({
      method: "put",
      url: `${baseUrl}/${authToken}/effects`,
      data: { select: value },
    })
      .then(({ data, status }) => {
        console.log(`::: Server ::: setBrightness ${status}: `, data);
        getAllLightControllerInfo().then(resolve);
      })
      .catch(reject);
  });

module.exports = {
  getAllLightControllerInfo,
  toggleLight,
  setBrightness,
  setHue,
  setSaturation,
  setEffect,
};
