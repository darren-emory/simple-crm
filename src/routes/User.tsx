import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUser } from "../supabase";
import { IUser } from "../interfaces.ts";
import { Link, useNavigate } from "react-router-dom";
import { UserCard } from "../components/UserCard.tsx";
import { Button } from "@chakra-ui/react";

function User() {
  const params: any = useParams();
  const userId = params.userId;

  const navigate = useNavigate();

  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    fetchUser(userId).then((results) => {
      setUser(results[0]);
    });
  }, []);

  return <>{user ? <UserCard user={user} /> : <></>}</>;
}

export default User;
