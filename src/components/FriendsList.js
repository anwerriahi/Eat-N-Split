import { Friend } from "./Friend";

export function FriendsList({ onclick, friendList, billSetting }) {
  
  return (
    <ul>
      {friendList.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onclick={onclick}
          billSetting={billSetting}
        />
      ))}
    </ul>
  );
}
