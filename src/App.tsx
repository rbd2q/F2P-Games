import "./index.css";

import { useRef } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { MenuNavigation } from "./components/MenuNavigation";
import { AllGames } from "./Pages/AllGames/AllGames";
import { BrowserGames } from "./Pages/BrowserGames/BrowserGames";
import { Favorite } from "./Pages/Favorite/Favorite";
import { GamePage } from "./Pages/GamePage/GamePage";
import { NotFound } from "./Pages/NotFound/NotFound";
import { PCGames } from "./Pages/PCGames/PCGames";
import { Popular } from "./Pages/Popular/Popular";

export const App = () => {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          retry: 1,
        },
      },
    });
  }

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClientRef.current}>
        <Header />
        <div className={styles.app}>
          <MenuNavigation />
          <div className="w-full md:ml-60 lg:ml-80">
            <div className="mx-auto max-w-7xl">
              <Switch>
                <Route path="/AllGames" component={AllGames} exact />
                <Route path="/Popular" component={Popular} />
                <Route path="/PCGames" component={PCGames} />
                <Route path="/BrowserGames" component={BrowserGames} />
                <Route path="/Favorite" component={Favorite} />
                <Route path="/game/detail/:id" component={GamePage} />
                <Route path="/notFound" component={NotFound} />
              </Switch>
            </div>
          </div>
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
