import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Github = () => {
  let [ghProfile, setGhProfile] = useState([]);
  useEffect(() => {
    async function GhProfile() {
      let response = await fetch("https://api.github.com/users/codacad");
      let data = await response.json();
      setGhProfile(data);
    }
    GhProfile();
  });

  return (
    <>
      <div className="github w-[70%] m-auto px-4 py-8">
        <h1 className="text-orange-800 font-bold text-4xl mb-8">
          Github Profile
        </h1>
        <div className="profile flex gap-4 items-center">
          <div className="pic">
            <img
              className="w-24 rounded-full"
              src={ghProfile.avatar_url}
              alt=""
            />
          </div>
          <div className="details">
            <h2 className="text-xl font-bold">{ghProfile.name}</h2>
            <span className="text-gray-400 text-sm">{ghProfile.bio}</span>
            <h2 className="text-gray-600 font-bold flex items-center mt-2">
              followers:{" "}
              <span className="ml-2 text-sm bg-orange-800 text-white w-6 h-6 flex justify-center items-center rounded-sm">
                {ghProfile.followers}
              </span>
            </h2>
          </div>
        </div>
        <Link
          className="mt-8 font-bold block w-40 text-2xl hover:text-orange-800"
          to={"/github/repos"}
        >
          Repositories
        </Link>
      </div>
    </>
  );
};

export default Github;
