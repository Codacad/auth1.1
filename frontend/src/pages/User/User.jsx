import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  return (
    <div className="w-[70%] m-auto py-8">
      <h1>User: {userId}</h1>
    </div>
  );
};

export default User;
