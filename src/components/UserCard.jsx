const UserCard = ({ userDetails }) => {
  return (
    <div className="card">
      <div className="img-container">
        <img src={userDetails?.avatar_url} alt={userDetails?.login} />
      </div>

      <div className="details">
        <p>Following: {userDetails?.following}</p>
        <p>Followers: {userDetails?.followers}</p>
        <p>Public Repositorys: {userDetails?.public_repos}</p>
        <span>View Github Profile: </span>
        <a href={`https://github.com/${userDetails?.login}`}>
          {userDetails?.login}
        </a>
      </div>
    </div>
  );
};

export default UserCard;
