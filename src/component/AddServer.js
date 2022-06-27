import React from "react";
import RESTClientService from "../service/RESTClientService";
import Server from "../model/Server";
import { Link} from "react-router-dom";

class AddServer extends React.Component{
    constructor() {
        super();
        this.service = new RESTClientService();
        this.state = {
            server: new Server()
        };

    }
  render(){
      return(
        <form>
      <div>
            <label for="id">Server id</label>
            <input className="form-control" type="text" id="id" placeholder="Enter Server ID"
                value={this.state.server.id}
                onChange={(e) => this.setState({ server: { ...this.state.server, id: e.target.value } })}
            />
        </div>
        <div>
            <label for="sereverName">Server Name</label>
            <input className="form-control" type="text" id="serverName" placeholder="Enter Server Name"
                value={this.state.server.name}
                onChange={(e) => this.setState({ server: { ...this.state.server, name: e.target.value } })}
            />
        </div>
        <div>
            <label for="serverLanguage">Server language</label>
            <input className="form-control" type="text" id="server Score" placeholder="Enter Server Language"
                value={this.state.server.language}
                onChange={(e) => this.setState({ server: { ...this.state.server, language: e.target.value } })}
            />
        </div>
        <div>
            <label for="serverFreamework">Server Framework</label>
            <input className="form-control" type="text" id="server framework" placeholder="Enter Server Framework"
                value={this.state.server.framework}
                onChange={(e) => this.setState({ server: { ...this.state.server, framework: e.target.value } })}
            />
        </div>
        <div className="btn-wrapper">
        <button className="btn  btn-primary btn-lg" onClick={
            (e) => {
                e.preventDefault();
                this.service.addOrUpdateServer(this.state.server)
                    .then((result) => {
                        alert('Server is added in database');
                    })
                    .catch((error) => {
                        alert(error);
                    })
            }
        }>Add Server</button>
        <Link className="btn btn-outline-secondary btn-lg" to={`/home`}>Cancel</Link>
        </div>
    </form>
      );
  }

}
export default AddServer;