// Style
import "./HomePage.css";

export default function HomePage({ API_URL }) {
  return (
    <div className="home-page">
      <h1>Home</h1>
      <code>{API_URL}</code>
    </div>
  );
}
