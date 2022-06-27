import axios from 'axios';
class RESTClientService{
    addOrUpdateServer(server){
        return axios.put('http://localhost:8080/api/servers',server);
    }
    findAllServer(){
       return axios.get('http://localhost:8080/api/servers');
    }
    findServertById(id){
    return   axios.get(`http://localhost:8080/api/servers/${id}`);
    }
    deleteServer(id){
      return   axios.delete(`http://localhost:8080/api/servers/${id}`);
    }
    findServerByName(name){
    return   axios.get(`http://localhost:8080/api/servers/find?name=${name}`);

  }

}
export default RESTClientService;