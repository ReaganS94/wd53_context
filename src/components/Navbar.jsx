export default function Navbar() {
  return (
    <nav style={{ background: "#ddd", color: "#555" }}>
      <span style={{ cursor: "pointer", float: "left" }}>Log in</span>

      <span style={{ cursor: "pointer", float: "right" }}>Dark Mode 🌚</span>
      <h1>Context App</h1>

      <br />

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
