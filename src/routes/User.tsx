import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUser, updateUser } from "../supabase";
import { IUser } from "../interfaces.ts";
import { Link, useNavigate } from "react-router-dom";

interface UserProps {
  edit?: boolean;
}

function User(props: UserProps) {
  const params: any = useParams();
  const userId = params.userId;

  const navigate = useNavigate();

  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    fetchUser(userId).then((results) => {
      setUser(results[0]);
    });
  }, []);

  const updateValue = (key: string, value: string) => {
    setUser({
      ...user,
      [key]: value,
    } as IUser);
  };

  const handleEdit = () => {
    updateUser(user as IUser)
      .then((response) => console.log(response))
      .then(() => navigate(`../user/${user?.id}`));
  };

  return (
    <>
      {user ? (
        props.edit ? (
          <>
            <h2>Edit User:</h2>
            <input
              value={user.title}
              onChange={(e) => updateValue("title", e.target.value)}
            />
            <input
              value={user.first_name}
              onChange={(e) => updateValue("first_name", e.target.value)}
            />
            <input
              value={user.last_name}
              onChange={(e) => updateValue("last_name", e.target.value)}
            />
            <input
              value={user.city}
              onChange={(e) => updateValue("city", e.target.value)}
            />
            <input
              value={user.state}
              onChange={(e) => updateValue("state", e.target.value)}
            />
            <input
              value={user.country}
              onChange={(e) => updateValue("country", e.target.value)}
            />
            <input
              value={user.email}
              onChange={(e) => updateValue("email", e.target.value)}
            />
            <input
              value={user.phone}
              onChange={(e) => updateValue("phone", e.target.value)}
            />
            <button type="submit" onMouseDown={handleEdit}>
              Save
            </button>
          </>
        ) : (
          <>
            <h2>
              {user.first_name} {user.last_name}
            </h2>
            <Link to={`../user/${user.id}/edit`}>Edit</Link>
          </>
        )
      ) : (
        <>Loading</>
      )}
    </>
  );
}

export default User;
