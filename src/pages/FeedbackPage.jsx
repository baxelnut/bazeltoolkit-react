// Style
import "./FeedbackPage.css";

export default function FeedbackPage({ API_URL }) {
  return (
    <div className="feeedback-page">
      <h1>Feedback</h1>
      <code>{API_URL}</code>
    </div>
  );
}
