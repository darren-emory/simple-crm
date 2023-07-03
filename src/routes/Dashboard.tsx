import { useState, useEffect } from "react";
import { fetchUsers } from "../supabase";
import { Link } from "react-router-dom";

export function Dashboard() {
  const [users, setUsers] = useState<[] | null>(null);

  useEffect(() => {
    fetchUsers().then((results) => {
      setUsers(results);
    });
  }, []);

  return (
    <>
      {users ? (
        users.map((user: any) => (
          <div key={user.id}>
            <Link to={`../user/${user.id}`}>
              <img width={50} src={user.picture_url} />
            </Link>
            <p>
              {user.first_name} {user.last_name}
            </p>
          </div>
        ))
      ) : (
        <p>No Users Loaded</p>
      )}
    </>
  );
}

export default Dashboard;
