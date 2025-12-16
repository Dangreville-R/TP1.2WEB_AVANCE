import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Connexion</h2>
      <form>
        <div>
          <label>Email :</label>
          <input
            type="email"
          />
        </div>
        <div>
          <label>Mot de passe :</label>
          <input
            type="password"
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>

    </div>
  );
}

export default App;