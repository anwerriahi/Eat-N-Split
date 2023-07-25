import { useState } from "react";

export function FormAddFriend({ onsubmit }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  return (
    <form className="form-add-friend" onSubmit={(e) => e.preventDefault()}>
      <label>👦 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <label>🖼️ Image URL</label>
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />

      <button
        className="button"
        onClick={() => {
          onsubmit(name, url);
          setName("");
          setUrl("");
        }}
      >
        Add
      </button>
    </form>
  );
}
