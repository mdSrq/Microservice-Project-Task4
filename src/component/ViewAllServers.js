import React from "react";
import { Link } from "react-router-dom";
import RESTClientService from "../service/RESTClientService";
/*eslint no-restricted-globals: ["error", "event"]*/

class ViewAllServers extends React.Component {
  constructor() {
    super();
    this.service = new RESTClientService();
    this.state = {
      recordsPresent: false,
      servers: [],
    };
  }
  componentDidMount() {
    this.service
      .findAllServer()
      .then((result) => {
        this.setState({ servers: result.data,recordsPresent: true});
      })
      .catch((error) => {
        alert(error);
      });
  }
  render() {
    return (
      <div>
        <form class="form-group">
          <label for="formGroupExampleInput">Search Servers</label>
          <input
            type="text"
            className="form-control"
            placeholder="Search servers by name"
            onChange={(e) => {
              if(e.target.value.length===0)
                this.componentDidMount();
              else{
              this.setState({recordsPresent: true});
              this.service
                .findServerByName(e.target.value)
                .then((result) => {
                  this.setState({ servers: result.data });
                })
                .catch((error) => {
                  if(error.response.status===404)
                    this.setState({recordsPresent: false});
                  else
                    console.log(error);
                });
              }
            }}
          />
        </form>
        <div className="mt-3">
          {this.state.recordsPresent && this.state.servers.length > 0 ? (
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Server ID</th>
                  <th>Server Name</th>
                  <th>Server Framework</th>
                  <th>Server Language</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.servers.map(
                  (
                    sr //start
                  ) => (
                    <tr>
                      <td>{sr.id}</td>
                      <td>{sr.name}</td>
                      <td>{sr.framework}</td>
                      <td>{sr.language}</td>
                     <td>
                        <Link
                          className="btn btn-outline-primary"
                          to={{ pathname: `/update-server/${sr.id}` }}
                        >
                          Update
                        </Link>
                      </td>
                      <td>
                        <span
                          className="btn btn-outline-danger"
                          onClick={(_e) => {
                            if (
                              confirm(
                                `Are you sure you want to delete server with id : ${sr.id}`
                              )
                            )
                              this.service
                                .deleteServer(sr.id)
                                .then((_result) => {
                                  alert(
                                    `Server with id : ${sr.id} is deleted!`
                                  );
                                  this.setState({
                                    servers: this.state.servers.filter(
                                      (server) => server.id !== sr.id
                                    ),
                                  });
                                });
                          }}
                          to={{ pathname: `/delete-server/${sr.id}` }}
                        >
                          Delete
                        </span>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          ) : (
            <span className="alert alert-danger ">
              No severs found
            </span>
          )}
        </div>
      </div>
    );
  }
}
export default ViewAllServers;
