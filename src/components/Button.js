export default function Button({ onclick, children, friend }) {
  return (
    <button className="button" onClick={() => onclick(friend)}>
      {children}
    </button>
  );
}
