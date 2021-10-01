import Search from "./search";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header text-center">Dictionary App</header>
      <main>
        <Search />
      </main>

      <footer className="text-center mt-5">
        <a
          href="https://github.com/scarlett-liang/dictionary-app"
          rel="noreferrer"
          target="_blank"
        >
          GitHub
        </a>{" "}
        open-source code developed by Scarlett Liang
      </footer>
    </div>
  );
}

export default App;
