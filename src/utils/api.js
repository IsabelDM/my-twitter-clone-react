import axios from 'axios';
import config from '../config.js';

export default axios.create({
  baseURL: config.baseURL_API
  //baseURL: 'http://localhost:5000' esto habría que ponerlo tb en el 
  //packetjson con el proxy para que el backend y el frontend no abran en 
  //el mismo puerto.
});