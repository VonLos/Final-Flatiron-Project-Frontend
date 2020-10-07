import React from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import ArticleCard from './features/ArticleCard/ArticleCard.js'
import ArticleContainer from './features/ArticleCard/ArticleContainer'
import {useSelector} from "react-redux";
import {
  Switch,
  Route,} from "react-router-dom";
import  CountryContainer from "./features/CountryCard/CountryContainer.js";


function App() {
  const countries = useSelector((state) => state.countries);
  const articles = useSelector((state) => state.articles);
  if (!countries) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <h1>Welcome to the Corona Country Spotlight!</h1>
          <Switch>
            <Route exact path='/'>
            <CountryContainer countries={countries} />
          </Route>
          <Route exact path="/articles">
           <ArticleContainer/>   
          </Route>
          </Switch>
    </div>
  );
}
export default App;