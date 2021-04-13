import { Route, Switch } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Search from "./pages/Search";
import Error from "./pages/Error";
import Contact from "./pages/Contact";

// Components
import Navbar from "./components/Navbar";
import DropdownNav from "./components/DropdownNav";
import Footer from "./components/Footer";
import { ScrollUp } from "./utilities/utils";

function App() {
  // const setScroll = () => window.scrollTo(0, 0);
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/search" component={Search} />
        <Route path="/contact" component={Contact} exact />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
