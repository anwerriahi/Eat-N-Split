import { Button } from "./App";

export function Friend({ friend, onclick }) {
  return (
    <div className="friend">
      <li>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        <p
          className={
            friend.balance < 0 ? "red" : friend.balance > 0 ? "green" : ""
          }
        >
          {friend.balance < 0 ? (
            <span>
              You owe {friend.name} {Math.abs(friend.balance)} DT
            </span>
          ) : friend.balance > 0 ? (
            <span>
              {friend.name} owes you {Math.abs(friend.balance)} DT
            </span>
          ) : friend.balance === 0 ? (
            <span>You and {friend.name} are even</span>
          ) : (
            ""
          )}
        </p>
        <Button onclick={onclick} friend={friend}>
          Select
        </Button>
      </li>
    </div>
  );
}
