import Header from "./components/Header/Header";
import styles from './App.module.scss'
import SimpleBottomNavigation from "./components/BottomNav/BottomNav";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Container} from "@mui/material";
import PCGames from "./Pages/PCGames/PCGames";
import BrowserGames from "./Pages/BrowserGames/BrowserGames";
import Favorite from "./Pages/Favorite/Favorite";
import AllGames from "./Pages/AllGames/AllGames";
import Popular from "./Pages/Popular/Popular";
import GamePage from "./Pages/GamePage/GamePage";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className={styles.app}>
        <Container>
          <Switch>
            <Route path='/' component={AllGames} exact />
            <Route path='/games/:genre' component={AllGames} exact />
            <Route path='/Popular' component={Popular} />
            <Route path='/PCGames' component={PCGames} />
            <Route path='/BrowserGames' component={BrowserGames} />
            <Route path='/Favorite' component={Favorite} />
            <Route path='/game/detail/:id' component={GamePage} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation/>
    </BrowserRouter>
  );
}

export default App;
