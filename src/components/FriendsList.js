import { Friend } from "./Friend";

export function FriendsList({ onclick, friendList }) {
  return (
    <ul>
      {friendList.map((friend) => (
        <Friend friend={friend} key={friend.id} onclick={onclick} />
      ))}
    </ul>
  );
}
