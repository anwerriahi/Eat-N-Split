import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../index.css";
import { FormSplitBill } from "./FormSplitBill";
import { FormAddFriend } from "./FormAddFriend";
import { FriendsList } from "./FriendsList";

const initialFriends = [
  {
    id: 1188310,
    name: "Anis",
    image: "https://i.pravatar.cc/48?u=1188310",
    balance: -7,
  },
  {
    id: 9333722,
    name: "Sami",
    image: "https://i.pravatar.cc/48?u=9333722",
    balance: 20,
  },
  {
    id: 499476,
    name: "Mohamed",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
export function Button({ onclick, children, friend }) {
  return (
    <button className="button" onClick={() => onclick(friend)}>
      {children}
    </button>
  );
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [billSetting, setBillSetting] = useState({ state: false, friend: {} });
  const [friendList, setFriendList] = useState([...initialFriends]);

  function handleToggleIsOpen() {
    setIsOpen(!isOpen);
    console.log(friendList);
  }

  function handleSplitBill(friend) {
    setBillSetting({ state: true, friend: friend });
  }

  function handleResetSplitBill() {
    setBillSetting({ state: false, friend: {} });
  }

  function handleSplit(friend, balance, who) {
    who === true
      ? setFriendList(
          friendList.map((f) =>
            f === friend ? { ...f, balance: balance * -1 } : f
          )
        )
      : setFriendList(
          friendList.map((f) => (f === friend ? { ...f, balance: balance } : f))
        );
    handleResetSplitBill();
  }

  function handleAddFriend(name, url) {
    const newFriend = {
      id: uuidv4(), // Use uuid to generate a unique id
      name: name,
      image: url,
      balance: 0,
    };
    setFriendList([...friendList, newFriend]);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList onclick={handleSplitBill} friendList={friendList} />

        {isOpen && <FormAddFriend onsubmit={handleAddFriend} />}

        <Button onclick={handleToggleIsOpen}>
          {isOpen ? "Close" : "Add friend"}
        </Button>
      </div>

      {billSetting.state && (
        <FormSplitBill friend={billSetting.friend} onclick={handleSplit} />
      )}
    </div>
  );
}
