import css from "../FriendList/FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  let status = isOnline ? (
    <p className={css.online}>Online</p>
  ) : (
    <p className={css.offline}>Offline</p>
  );

  return (
    <div className={css.item}>
      <img className={css.photo} src={avatar} alt={name} width="48" />
      <p className={css.text}>{name}</p>
      <>{status}</>
    </div>
  );
};

export default FriendListItem;