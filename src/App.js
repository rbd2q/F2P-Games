import { Container } from "@mui/material";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import styles from "./App.module.scss";
import SimpleBottomNavigation from "./components/BottomNav/BottomNav";
import Header from "./components/Header/Header";
import AllGames from "./Pages/AllGames/AllGames";
import BrowserGames from "./Pages/BrowserGames/BrowserGames";
import Favorite from "./Pages/Favorite/Favorite";
import GamePage from "./Pages/GamePage/GamePage";
import NotFound from "./Pages/NotFound/NotFound";
import PCGames from "./Pages/PCGames/PCGames";
import Popular from "./Pages/Popular/Popular";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className={styles.app}>
        <Container>
          <Switch>
            <Route path="/AllGames" component={AllGames} exact />
            <Route path="/Popular" component={Popular} />
            <Route path="/PCGames" component={PCGames} />
            <Route path="/BrowserGames" component={BrowserGames} />
            <Route path="/Favorite" component={Favorite} />
            <Route path="/game/detail/:id" component={GamePage} />
            <Route path="/notFound" component={NotFound} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
