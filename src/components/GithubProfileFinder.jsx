import { useEffect } from "react";
import { useState } from "react";
import UserCard from "./UserCard";
import "./style.css";

const GithubProfileFinder = () => {
  const [inputValue, setInputValue] = useState("sumangitron");
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getData() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.github.com/users/${inputValue}`
      );
      const data = await response.json();

      console.log(data);
      setApiData(data);
      setLoading(false);
      setInputValue("");
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (loading === true) {
    return <h3>Loading data. please wait...</h3>;
  }

  return (
    <div className="main-container">
      <div className="input-box">
        <input
          type="text"
          name="username"
          placeholder="enter username"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={getData}>get profile</button>
      </div>
      {apiData !== null ? <UserCard userDetails={apiData} /> : null}
    </div>
  );
};

export default GithubProfileFinder;
