import Profile from "../Profile/Profile.jsx";
import FriendList from '../FriendList/FriendList.jsx';
import TransactionHistory from "../Transaction/TransactionHistory.jsx";

import userData from "../Data/userData.json";
import friends from "../Data/friends.json";
import transaction from "../Data/transaction.json";

import css from "./App.module.css";

function App() {
  return (
    <div className={css["main-app"]}>
      <Profile
        username={userData.username}
        tag={userData.tag}
        stats={userData.stats}
        location={userData.location}
        avatar={userData.avatar}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </div>
  );
}

export default App;