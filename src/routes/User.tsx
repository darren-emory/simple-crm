import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUser } from "../supabase";
import { IUser } from "../interfaces.ts";
import { UserCard } from "../components/UserCard.tsx";

function User() {
  const params: any = useParams();
  const userId = params.userId;

  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    fetchUser(userId).then((results) => {
      setUser(results[0]);
    });
  }, []);

  return <>{user ? <UserCard user={user} /> : <></>}</>;
}

export default User;
