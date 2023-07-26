import { useState } from "react";

export function FormSplitBill({ friend, onclick }) {
  const [who, setWho] = useState(true);
  let [billValue, setBillValue] = useState(0);
  let [myExpense, setMyExpense] = useState(0);
  const [balance, setBalance] = useState(myExpense);

  return (
    <form
      className="form-split-bill"
      onSubmit={(e) => {
        e.preventDefault();
        onclick(friend, +balance, who);
      }}
    >
      <h2>Split a bill with {friend.name}</h2>
      <label>💵 Bill value</label>
      <input
        type="number"
        value={billValue}
        onChange={(e) => setBillValue(+e.target.value)}
      />

      <label>🙎Your expense</label>
      <input
        type="number"
        value={myExpense}
        onChange={(e) => {
          // eslint-disable-next-line no-lone-blocks
          {
            const newExpense = +e.target.value;
            setMyExpense(newExpense);
            setBalance(+billValue - newExpense);
          }
        }}
      />

      <label>👦 {friend.name}'s expense</label>
      <input type="text" value={billValue - myExpense} disabled />

      <label>🤑 Who is paing the bill</label>
      <select value={who} onChange={(e) => setWho(e.target.value === "true")}>
        <option value={true}>You</option>
        <option value={false}>{friend.name}</option>
      </select>

      <button
        type="submit"
        className="button"
        onClick={() => onclick(friend, +balance, who)}
      >
        Split bill
      </button>
    </form>
  );
}
