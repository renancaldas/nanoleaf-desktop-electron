import {
  CONTROLLER_INFO_REQUEST,
  CONTROLLER_INFO_RESPONSE,
  TOGGLE_LIGHT_REQUEST,
  TOGGLE_LIGHT_RESPONSE,
  SET_BRIGHTNESS_REQUEST,
  SET_BRIGHTNESS_RESPONSE,
  SET_HUE_REQUEST,
  SET_HUE_RESPONSE,
  SET_SATURATION_REQUEST,
  SET_SATURATION_RESPONSE,
  SET_EFFECT_REQUEST,
  SET_EFFECT_RESPONSE,
  CONFIG_RESPONSE,
  SET_CONFIG_RESPONSE,
} from "../actions";

const defaultState = {
  loading: false,
  controllerInfo: null,
  config: null,
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case CONTROLLER_INFO_REQUEST:
    case TOGGLE_LIGHT_REQUEST:
    case SET_BRIGHTNESS_REQUEST:
    case SET_HUE_REQUEST:
    case SET_SATURATION_REQUEST:
    case SET_EFFECT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case CONTROLLER_INFO_RESPONSE:
    case TOGGLE_LIGHT_RESPONSE:
    case SET_BRIGHTNESS_RESPONSE:
    case SET_HUE_RESPONSE:
    case SET_SATURATION_RESPONSE:
    case SET_EFFECT_RESPONSE: {
      return {
        ...state,
        loading: false,
        controllerInfo: action.payload,
      };
    }

    case CONFIG_RESPONSE: {
      return {
        ...state,
        config: action.payload,
      };
    }

    case SET_CONFIG_RESPONSE: {
      return {
        ...state,
        config: action.payload,
      };
    }

    default:
      return state;
  }
}
