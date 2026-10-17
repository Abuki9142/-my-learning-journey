import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="card">

        <div className="icon">☆</div>

        <h1>Upgrade to Pro</h1>

        <p>
          Unlock team workflows and insights built
          for growing products.
        </p>

        <ul>
          <li>Unlimited projects and collaborators</li>
          <li>Priority support with 24h response</li>
          <li>Advanced analytics and exports</li>
        </ul>

        <button>Upgrade now</button>

        <button className="compare">
          Compare plans
        </button>

      </div>
    </div>
  );
}

export default App;