import { useState, useEffect } from "react";
import User from "./user.tsx";
import "./styles.css";

export default function GithubProfile() {
  const [username, setusername] = useState("OmeizaAhmed");
  const [loading, setLoading] = useState(true);
  const [errMessage, setErrMessage] = useState<string>();
  const [userData, setUserData] = useState("");

  async function fetchUserData() {
    try {
      setLoading(true);
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();
      if (res.status === 404) {
        throw new Error("User Not Found!");
      }
      setUserData(data);
      setLoading(false);
      if (errMessage) setErrMessage("");
    } catch (e) {
      setLoading(false);
      if (e instanceof Error) {
        setErrMessage(e.message);
      } else {
        setErrMessage("unknown error");
      }
    }
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) return <div>Fetching user profile ! Please wait</div>;

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="E.g, OmeizaAhmed"
          name="username"
          onChange={(e) => setusername(e.target.value)}
        />
        <button onClick={fetchUserData}>Search Github Profile</button>
      </form>
      {userData && !errMessage ? <User user={userData} /> : errMessage || null}
    </div>
  );
}
