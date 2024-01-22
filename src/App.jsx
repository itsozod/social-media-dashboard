import "./App.css";
import { Header } from "./components/header/Header";
import { BigCards } from "./components/bigCards/BigCards";
import { SmallCards } from "./components/smallCards/SmallCards";
import { ThemeProvider } from "./hooks/ThemeProvider";
import { Layout } from "./components/layout/Layout";
function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Layout>
          <BigCards />
          <SmallCards />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
