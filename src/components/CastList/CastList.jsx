import './CastList.css';
import profilePicture from '../../image/profile-picture.jpg';

function CastList({ cast, className }) {
  return (
    <ul className={className}>
      {cast.map(el => (
        <li key={el.id}>
          <img
            src={el.profile_path ? `https://image.tmdb.org/t/p/w300${el.profile_path}` : profilePicture}
            alt={el.name}
          />
          <p>{el.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default CastList;