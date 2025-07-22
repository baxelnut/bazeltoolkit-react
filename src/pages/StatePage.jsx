// Style
import "./StatePage.css";
// Components
import Loading from "../components/state/Loading";
import Error from "../components/state/Error";

export default function StatePage({ API_URL }) {
  return (
    <div className="state-page">
      <h1>States</h1>
      <code>{API_URL}</code>

      <div className="cards-container row-1-1">
        <div className="card states">
          <Loading />
        </div>
        <div className="card states">
          <Error />
        </div>
      </div>
    </div>
  );
}
