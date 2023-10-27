import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Repos() {
  let [ghRepos, setGhRepos] = useState([]);
  useEffect(() => {
    async function GhRepos() {
      let response = await fetch("https://api.github.com/users/Codacad/repos");
      let data = await response.json();
      setGhRepos(data);
    }
    GhRepos();
  });
  return (
    <>
      <div className="repos w-[70%] m-auto px-4 py-8">
        <h1 className="text-4xl text-orange-800 font-bold mb-4">
          Repositories
        </h1>
        <ul className="flex flex-col gap-2">
          {ghRepos.map((repo) => (
            <li key={repo.id}>
              <Link
                target="_blank"
                className="capitalize text-xl text-gray-600 px-2 hover:text-white hover:bg-orange-800"
                to={repo.html_url}
              >
                {repo.name}
              </Link>
              <span className="text-gray-600 mr-2">&#129130;</span>
              <Link
                target="_blank"
                className="text-xl text-orange-800 font-bold"
                to={`https:codacad.github.io/${repo.name}`}
              >
                ( Live Preview )
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Repos;
