// Style
import "./UtilPage.css";

export default function UtilPage({ API_URL }) {
  return (
    <div className="util-page">
      <h1>Utils</h1>
      <code>{API_URL}</code>
    </div>
  );
}
