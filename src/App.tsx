import { useState, useEffect } from "react";
import * as services from "./services/apiRequestHttp";

export const App = () => {

  const [repositories, setRepositories] = useState([]);

  const repositorie = "node";

  const getRepositories = () => {
    services.client.get(`/repositories?q=${repositorie}`)
    .then(res => setRepositories(res.data))
    .catch(err => console.log(err.response.data));
  };

  useEffect(() => {
    getRepositories();
  }, []);

  console.log(repositories);

  return (
    <div>
      <h1> Deus seja louvado! </h1>
    </div>
  );
};
