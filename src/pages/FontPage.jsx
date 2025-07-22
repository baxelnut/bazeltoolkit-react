// Style
import "./FontPage.css";

export default function FontPage({ API_URL }) {
  return (
    <div className="font-page">
      <h1>Fonts</h1>
      <code>{API_URL}</code>

      <div className="cards-container col">
        <div className="card fonts">
          <h1>Heading 1</h1>
          <p>Font: Lexend | Size: clamp(2.5rem, 5vw, 3rem) | Weight: 600</p>
        </div>
        <div className="card fonts">
          <h2>Heading 2</h2>
          <p>Font: Lexend | Size: clamp(2rem, 4vw, 2.5rem) | Weight: 600</p>
        </div>
        <div className="card fonts">
          <h3>Heading 3</h3>
          <p>Font: Lexend | Size: clamp(1.75rem, 3.5vw, 2rem) | Weight: 600</p>
        </div>
        <div className="card fonts">
          <h4>Heading 4</h4>
          <p>Font: Lexend | Size: clamp(1.5rem, 3vw, 1.75rem) | Weight: 600</p>
        </div>
        <div className="card fonts">
          <h5>Heading 5</h5>
          <p>
            Font: Lexend | Size: clamp(1.25rem, 2.5vw, 1.5rem) | Weight: 600
          </p>
        </div>
        <div className="card fonts">
          <h6>Heading 6</h6>
          <p>Font: Lexend | Size: clamp(1rem, 2vw, 1.25rem) | Weight: 600</p>
        </div>
        <div className="card fonts">
          <p>
            The quick brown fox jumps over the lazy dog. 1234567890 !@#$%^&*()
          </p>
          <p>Font: DM Sans | Size: clamp(0.9rem, 0.9vw, 1rem) | Weight: 400</p>
        </div>
        <div className="card fonts">
          <a href="">This is a link</a>
          <p>
            Font: DM Sans | Italic | Size: clamp(0.9rem, 0.9vw, 1rem) | Hover →
            color: var(--secondary), weight: 500
          </p>
        </div>
      </div>
    </div>
  );
}
