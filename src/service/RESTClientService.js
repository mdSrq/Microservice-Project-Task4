import axios from 'axios';
import { config } from './config';
class RESTClientService{
    addOrUpdateServer(server){
        return axios.put(`http://${config.host}:${config.port}/api/servers`,server);
    }
    findAllServer(){
       return axios.get(`http://${config.host}:${config.port}/api/servers`);
    }
    findServertById(id){
    return   axios.get(`http://${config.host}:${config.port}/api/servers/${id}`);
    }
    deleteServer(id){
      return   axios.delete(`http://${config.host}:${config.port}/api/servers/${id}`);
    }
    findServerByName(name){
    return   axios.get(`http://${config.host}:${config.port}/api/servers/find?name=${name}`);

  }

}
export default RESTClientService;