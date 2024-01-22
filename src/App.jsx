import "./App.css";
import { Header } from "./components/header/Header";
import { BigCards } from "./components/bigCards/BigCards";
import { SmallCards } from "./components/smallCards/SmallCards";
function App() {
  return (
    <>
      <Header />
      <main>
        <BigCards />
        <SmallCards />
      </main>
    </>
  );
}

export default App;
