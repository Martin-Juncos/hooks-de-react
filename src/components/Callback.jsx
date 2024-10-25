import { useEffect, useState, useCallback } from "react";

// eslint-disable-next-line react/prop-types
const Callback = ({ id }) => {
  const [user, setUser] = useState({});

  const getUser = useCallback(async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + id
    );
    const json = await response.json();
    setUser(json);
  }, [id]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <div>
      <p>callback</p>
      <h3>{user.name} </h3>
    </div>
  );
};

export default Callback;
