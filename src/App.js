import Details from "./components/Details";
import MainPage from "./components/MainPage";
import Favourites from "./components/Favourites";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={MainPage} />
        <Route path="/details/:id" exact component={Details} />
        <Route path="/favourites" exact component={Favourites} />
      </Router>
    </>
  );
}

export default App;
