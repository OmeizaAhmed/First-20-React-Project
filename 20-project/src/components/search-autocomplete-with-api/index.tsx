import { useState, useEffect } from "react";

export default function AutoComplete() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState<string>();
  const [searchParams, setSearchParams] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  async function fetchData() {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      setUserData(
        data.users.map((user: { firstName: string }) => user.firstName)
      );
      console.log(data.users);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      if (e instanceof Error) {
        setErrMessage(e.message);
      } else {
        setErrMessage("Unknown Error!");
      }
    }
  }

  function handleSelectSelection(suggestion: string) {
    setSearchParams(suggestion);
    setSuggestions([]);
  }

  function handleSuggestion(e: { target: { value: string } }) {
    setSearchParams(e.target.value);
    if (e.target.value.length > 1) {
      const filteredData = userData.filter(
        (item: string) =>
          item.toLowerCase().indexOf(searchParams.toLowerCase()) > -1
      );
      setSuggestions(filteredData);
    } else {
      setSuggestions([]);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading ! Please Wait</div>;
  if (errMessage) return <div>{errMessage}</div>;

  return (
    <div>
      <input
        type="text"
        placeholder="E.g, John Doe"
        onChange={(e) => handleSuggestion(e)}
        value={searchParams}
      />
      <ul>
        {suggestions.length
          ? suggestions.map((suggestion, index) => (
              <li key={index} onClick={() => handleSelectSelection(suggestion)}>
                {suggestion}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
