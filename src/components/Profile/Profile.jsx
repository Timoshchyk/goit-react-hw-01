import css from "./Profile.module.css";

const Profile = ({ username, avatar, tag, location, stats }) => {
  return (
    <div className={css.card}>
      <div className={css["photo-wrap"]}>
        <img className={css.photo} src={avatar} alt="User avatar" />
        <p className={css.name}>{username}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css["list-items"]}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css["list-items"]}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css["list-items"]}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;