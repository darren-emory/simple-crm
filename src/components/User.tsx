import { useEffect } from "react";
import { fetchUser } from "../supabase";

interface UserProps {
  id: string;
}

function User(props: UserProps) {
  useEffect(() => {
    fetchUser(props.id).then((results) => {
      console.log(results);
    });
  });

  return <>yo</>;
}

export default User;
