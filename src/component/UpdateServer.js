import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import Server from "../model/Server";
import RESTClientService from "../service/RESTClientService";

function UpdateServer() {
  const [state, setState] = useState({ server: new Server() });
  let service = new RESTClientService();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    service
      .findServertById(id)
      .then((result) => {
        setState({ server: result.data });
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  return (
    <form>
      <div>
        <label for="id">Server ID</label>
        <input
          className="form-control"
          type="text"
          id="id"
          placeholder="Enter Server ID"
          value={state.server.id}
          readOnly={true}
        />
      </div>
      <div>
        <label for="servertName">Server Name</label>
        <input
          className="form-control"
          type="text"
          id="studentName"
          placeholder="Enter Server Name"
          value={state.server.name}
          onChange={(e) => {
            setState({
              server: {
                ...state.server,
                name: e.target.value,
              },
            });
          }}
        />
      </div>
      <div>
        <label for="serverLanguage">Server Language</label>
        <input
          className="form-control"
          type="text"
          id="serverLanguage"
          placeholder="Enter Server Language"
          value={state.server.language}
          onChange={(e) =>
            setState({ server: { ...state.server, language: e.target.value } })
          }
        />
      </div>
      <div>
        <label for="serverFramework">Server framework</label>
        <input
          className="form-control"
          type="text"
          id="serverFramework"
          placeholder="Enter Server framework"
          value={state.server.framework}
          onChange={(e) =>
            setState({ server: { ...state.server, framework: e.target.value } })
          }
        />
      </div>
      <div className="btn-wrapper">
      <button
        className="btn btn-primary btn-lg mt-3"
        onClick={(e) => {
          e.preventDefault();
          service
            .addOrUpdateServer(state.server)
            .then(() => {
              alert("Server record is updated");
              setState({ server: {} });
              navigate("/home");
            })
            .catch((error) => {
              alert(error);
            });
        }}
      >
        Update Server
      </button>
      <Link className="btn btn-outline-secondary btn-lg" to="/home">Cancel</Link>
      </div>
    </form>
  );
}
export default UpdateServer;
