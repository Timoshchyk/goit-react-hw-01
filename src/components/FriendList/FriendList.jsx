import FriendListItem from "../FriendListItem/FriendListItem";

import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(({ id, avatar, isOnline, name }) => {
        return (
          <li key={id}>
            <FriendListItem avatar={avatar} isOnline={isOnline} name={name} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;