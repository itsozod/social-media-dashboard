import "./App.css";
import { Header } from "./components/header/Header";
import { BigCards } from "./components/bigCards/BigCards";
function App() {
  return (
    <>
      <Header />
      <main>
        <BigCards />
      </main>
    </>
  );
}

export default App;
