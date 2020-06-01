import { CONTROLLER_INFO_REQUEST, SET_BRIGHTNESS_REQUEST } from "./index";
import socket from '../../api/socketio';

export function getControllerInfoAction() {
  socket.emit(CONTROLLER_INFO_REQUEST);

  return {
    type: CONTROLLER_INFO_REQUEST,
  };
}

export function setBrightness(value) {
  socket.emit(SET_BRIGHTNESS_REQUEST, value);

  return {
    type: SET_BRIGHTNESS_REQUEST,
  };
}
