// Style
import "./ColorsPage.css";
// Data
import { COLOR_BLOCK } from "../data/colorsData";

export default function ColorsPage({ API_URL }) {
  return (
    <div className="colors=page">
      <h1>Colors</h1>
      <code>{API_URL}</code>

      <div className="cards-container grid">
        {COLOR_BLOCK.map((block, index) => (
          <div
            key={index}
            className={`card colors ${block.className}`}
            style={{ backgroundColor: block.backgroundColor }}
          >
            <h6>{block.label}</h6>
            <p>{block.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
