import {
  CONTROLLER_INFO_REQUEST,
  TOGGLE_LIGHT_REQUEST,
  SET_BRIGHTNESS_REQUEST,
  SET_HUE_REQUEST,
  SET_SATURATION_REQUEST,
  SET_EFFECT_REQUEST
} from "./index";
import socket from "../../api/socketio";

export function getControllerInfoAction() {
  socket.emit(CONTROLLER_INFO_REQUEST);

  return {
    type: CONTROLLER_INFO_REQUEST,
  };
}

export function toggleLight(value) {
  socket.emit(TOGGLE_LIGHT_REQUEST, value);

  return {
    type: TOGGLE_LIGHT_REQUEST,
  };
}

export function setBrightness(value) {
  socket.emit(SET_BRIGHTNESS_REQUEST, value);

  return {
    type: SET_BRIGHTNESS_REQUEST,
  };
}

export function setHue(value) {
  socket.emit(SET_HUE_REQUEST, value);

  return {
    type: SET_HUE_REQUEST,
  };
}

export function setSaturation(value) {
  socket.emit(SET_SATURATION_REQUEST, value);

  return {
    type: SET_SATURATION_REQUEST,
  };
}

export function setEffect(value) {
  socket.emit(SET_EFFECT_REQUEST, value);

  return {
    type: SET_EFFECT_REQUEST,
  };
}
