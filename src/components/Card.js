import React from "react";
import { HashLoader } from "react-spinners";
import "./Card.css";

const Card = () => {
  const [person, setPerson] = React.useState({});
  const [imgSrc, setImgSrc] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [rankInfo, setRankInfo] = React.useState({
    organRank: 0,
    countryRank: 0,
    worldRank: 0,
  });

  React.useEffect(() => {
    fetch(
      "https://api.codedigger.tech/auth/profile/shivamsinghal1012/?platform=codeforces"
    )
      .then((res) => res.json())
      .then((data) => {
        const {
          name,
          rank,
          maxRank,
          rating,
          maxRating,
          organizationRank,
          countryRank,
          worldRank,
          contestRank,
          photoUrl,
        } = data.result;
        setPerson({
          name,
          rank,
          maxRank,
          rating,
          maxRating,
          organizationRank,
          countryRank,
          worldRank,
          contestRank,
        });
        setImgSrc("ht" + photoUrl);
        setRankInfo({
          organRank: organizationRank,
          countryRank: countryRank,
          worldRank: worldRank,
        });
        setLoading(false);
      });
  }, []);

  const handleRank = (e) => {
    const id = parseInt(e.target.id);
    if (id >= 0) {
      setRankInfo({
        organRank: person.contestRank[id].organizationRank,
        countryRank: person.contestRank[id].countryRank,
        worldRank: person.contestRank[id].worldRank,
      });
    } else {
      setRankInfo({
        organRank: person.organizationRank,
        countryRank: person.countryRank,
        worldRank: person.worldRank,
      });
    }
  };

  return (
    <>
      {loading && <HashLoader loading={loading} />}

      {!loading && (
        <div className="wrapper">
          <div className="profile">
            <img src={imgSrc} className="thumbnail" alt="profile" />
            <h3 className="name">{person.name}</h3>
            <p className="title">Compettive Programmer</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              aliquam aliquid porro!
            </p>
            <div className="rating">
              <p>
                Rating: <span>{person.rating}</span>
              </p>
              <p>
                Max Rating: <span>{person.maxRating}</span>
              </p>
            </div>
            <div className="ranking">
              <p>
                Rank: <span>{person.rank}</span>
              </p>
              <p>
                Max Rank: <span>{person.maxRank}</span>
              </p>
            </div>
          </div>

          <div className="btn-group">
            <button type="button" className="btn" id="-1" onClick={handleRank}>
              Current
            </button>
            <button type="button" className="btn" id="0" onClick={handleRank}>
              Contest 1
            </button>
            <button type="button" className="btn" id="1" onClick={handleRank}>
              Contest 2
            </button>
            <button type="button" className="btn" id="2" onClick={handleRank}>
              Contest 3
            </button>
          </div>

          <div className="icons">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 .95 14.61 4h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.379l.5 2A.5.5 0 0 1 15.5 17H.5a.5.5 0 0 1-.485-.621l.5-2A.5.5 0 0 1 1 14V7H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 4h.89L8 .95zM3.776 4h8.447L8 2.05 3.776 4zM2 7v7h1V7H2zm2 0v7h2.5V7H4zm3.5 0v7h1V7h-1zm2 0v7H12V7H9.5zM13 7v7h1V7h-1zm2-1V5H1v1h14zm-.39 9H1.39l-.25 1h13.72l-.25-1z" />
              </svg>
              <h4> {rankInfo.organRank}</h4>
              <p>Organisation Rank</p>
            </div>
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
              </svg>
              <h4>{rankInfo.countryRank}</h4>
              <p>Country Rank</p>
            </div>
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
              </svg>
              <h4>{rankInfo.worldRank}</h4>
              <p>World Rank</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
