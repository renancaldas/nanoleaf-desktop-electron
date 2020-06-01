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
} from "../actions";

const defaultState = {
  controllerInfo: {
    loading: false,
    data: null,
  },
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    // Controler Info ---------------------------------------------

    case CONTROLLER_INFO_REQUEST: {
      return {
        ...state,
        controllerInfo: {
          ...state.controllerInfo,
          loading: true,
        },
      };
    }

    case CONTROLLER_INFO_RESPONSE: {
      return {
        ...state,
        controllerInfo: {
          loading: false,
          data: action.payload,
        },
      };
    }

    // Toggle light ---------------------------------------------

    case TOGGLE_LIGHT_REQUEST: {
      return {
        ...state,
        toggle: {
          ...state.controllerInfo,
          loading: true,
        },
      };
    }

    case TOGGLE_LIGHT_RESPONSE: {
      return {
        ...state,
        toggle: {
          loading: false,
          data: action.payload,
        },
      };
    }

    // Set Brightness ---------------------------------------------

    case SET_BRIGHTNESS_REQUEST: {
      return {
        ...state,
        brightness: {
          loading: true,
        },
      };
    }

    case SET_BRIGHTNESS_RESPONSE: {
      return {
        ...state,
        brightness: {
          loading: false,
          data: action.payload,
        },
      };
    }

    // Set Hue ---------------------------------------------

    case SET_HUE_REQUEST: {
      return {
        ...state,
        hue: {
          loading: true,
        },
      };
    }

    case SET_HUE_RESPONSE: {
      return {
        ...state,
        hue: {
          loading: false,
          data: action.payload,
        },
      };
    }

    // Set Saturation ---------------------------------------------

    case SET_SATURATION_REQUEST: {
      return {
        ...state,
        saturation: {
          loading: true,
        },
      };
    }

    case SET_SATURATION_RESPONSE: {
      return {
        ...state,
        saturation: {
          loading: false,
          data: action.payload,
        },
      };
    }

    default:
      return state;
  }
}

/* 
{
    "name": "Light Panels 53:c3:f7",
    "serialNo": "ABCDEFGH",
    "manufacturer": "Nanoleaf",
    "firmwareVersion": "3.3.4",
    "hardwareVersion": "1.6-2",
    "model": "ABC12",
    "cloudHash": {},
    "discovery": {},
    "effects": {
        "effectsList": [
            "Color Burst",
            "Fireworks",
            "Flames",
            "Forest",
            "Inner Peace",
            "Meteor Shower",
            "Nemo",
            "Northern Lights",
            "Paint Splatter",
            "Pulse Pop Beats",
            "Rhythmic Northern Lights",
            "Ripple",
            "Romantic",
            "Snowfall",
            "Sound Bar",
            "Streaking Notes"
        ],
        "select": "*Solid*"
    },
    "firmwareUpgrade": {},
    "panelLayout": {
        "globalOrientation": {
            "value": 0,
            "max": 360,
            "min": 0
        },
        "layout": {
            "numPanels": 15,
            "sideLength": 150,
            "positionData": [
                {
                    "panelId": 59,
                    "x": 599,
                    "y": 43,
                    "o": 60,
                    "shapeType": 0
                },
                {
                    "panelId": 214,
                    "x": 599,
                    "y": 129,
                    "o": 240,
                    "shapeType": 0
                },
                {
                    "panelId": 244,
                    "x": 674,
                    "y": 173,
                    "o": 180,
                    "shapeType": 0
                },
                {
                    "panelId": 103,
                    "x": 749,
                    "y": 129,
                    "o": 120,
                    "shapeType": 0
                },
                {
                    "panelId": 14,
                    "x": 524,
                    "y": 173,
                    "o": 300,
                    "shapeType": 0
                },
                {
                    "panelId": 116,
                    "x": 524,
                    "y": 259,
                    "o": 240,
                    "shapeType": 0
                },
                {
                    "panelId": 37,
                    "x": 449,
                    "y": 129,
                    "o": 0,
                    "shapeType": 0
                },
                {
                    "panelId": 207,
                    "x": 374,
                    "y": 173,
                    "o": 300,
                    "shapeType": 0
                },
                {
                    "panelId": 111,
                    "x": 299,
                    "y": 129,
                    "o": 120,
                    "shapeType": 0
                },
                {
                    "panelId": 211,
                    "x": 224,
                    "y": 173,
                    "o": 60,
                    "shapeType": 0
                },
                {
                    "panelId": 190,
                    "x": 149,
                    "y": 129,
                    "o": 240,
                    "shapeType": 0
                },
                {
                    "panelId": 110,
                    "x": 149,
                    "y": 43,
                    "o": 180,
                    "shapeType": 0
                },
                {
                    "panelId": 35,
                    "x": 74,
                    "y": 173,
                    "o": 60,
                    "shapeType": 0
                },
                {
                    "panelId": 219,
                    "x": 0,
                    "y": 129,
                    "o": 0,
                    "shapeType": 0
                },
                {
                    "panelId": 226,
                    "x": 224,
                    "y": 259,
                    "o": 0,
                    "shapeType": 0
                }
            ]
        }
    },
    "rhythm": {
        "auxAvailable": false,
        "firmwareVersion": "2.4.3",
        "hardwareVersion": "2.0",
        "rhythmActive": false,
        "rhythmConnected": true,
        "rhythmId": 241,
        "rhythmMode": 0,
        "rhythmPos": {
            "x": 374.99822127189187,
            "y": 259.8024359981273,
            "o": 120.0
        }
    },
    "schedules": {},
    "state": {
        "brightness": {
            "value": 50,
            "max": 100,
            "min": 0
        },
        "colorMode": "ct",
        "ct": {
            "value": 1200,
            "max": 6500,
            "min": 1200
        },
        "hue": {
            "value": 20,
            "max": 360,
            "min": 0
        },
        "on": {
            "value": true
        },
        "sat": {
            "value": 100,
            "max": 100,
            "min": 0
        }
    }
}
*/
