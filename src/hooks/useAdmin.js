import { useState } from "react";
import { useQuery } from "react-query";

const useAdmin = (authUser) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useState(() => {
    const email = authUser?.email;
    if (email) {
      fetch(`http://localhost:5000/usersByEmail?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.role === "admin") {
            setIsAdmin(true);
          }
          setLoading(false);
        });
    }
  }, [authUser]);

  return [isAdmin, loading];
};

export default useAdmin;
