import './styles.css'

export default function User({user}:any){
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    created_at,
    login,
  } = user;

  const date = new Date(created_at)
   const dateString = `${date.getDate()} ${date.toLocaleString('en-US', {month: 'short'})} ${date.getFullYear()}`;

   console.log(dateString)
  return(
    <div className="card">
      <img src={avatar_url} alt={name}/>
      <p><a href={`https://github.com/${login}`}>{name}</a> Joined {dateString}</p>
      <p>Public Repo: {public_repos}</p>
      <p>Follower: {followers}</p>
      <p>Following: {following}</p>
    </div>
  )
}

 