import './App.css';
import { Redirect, Route } from "react-router";
import { HashRouter } from "react-router-dom";
import From from "./components/fieldFrom/setUpFrom";
import {Provider} from  'react-redux';
import store from './redux/index.js';
import Progress from "./components/progress/Progress";
import Result from "./components/Result/Result";

function App() {
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
          <Provider store={store}>
              <Redirect form='/' to='some-important-form' />
          <Route path='/some-important-form'  render= { ()=> {
            return  (
                <>
                   <div>
                     <From />
                   </div>
                </>
            )
          }} />
              <Route path='/loading'  render= { ()=> {
                  return  (
                      <>
                          <div>
                              <Progress />
                          </div>
                      </>
                  )
              }} />
              <Route path='/result-page'  render= { ()=> {
                  return  (
                      <>
                          <div>
                              <Result />
                          </div>
                      </>
                  )
              }} />

        </Provider>
      </HashRouter>
    </div>
  );
}

export default App;
