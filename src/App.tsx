import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://aubhbxjhaejjitgtfkfb.supabase.co",
  import.meta.env.VITE_API as string
);

function App() {
  const [users, setUsers] = useState<[] | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const { data } = await supabase.from("users").select();
    setUsers(data as any);
  }

  return (
    <>
      {users ? (
        users.map((user: any) => (
          <div key={user.id}>
            <img width={50} src={user.picture_url} />
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

export default App;
