//import axios from 'axios';
import io from 'socket.io-client';

var socket = io('http://localhost:3001');
socket.on('connect', () => { console.log('>>>> connect') });
socket.on('event', () => { console.log('>>>> event') });
socket.on('disconnect', () => { console.log('>>>> disconnect') });


setTimeout(() => {
    console.log('::: Client ::: getAllLightControllerInfo')
    socket.emit('getAllLightControllerInfo');
}, 2000)

socket.on('getAllLightControllerInfo', console.log);

export default socket;