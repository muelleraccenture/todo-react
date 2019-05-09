import React from 'react';
import './App.css';
import {ItemListContainer} from "./container/ItemListContainer";
import {Provider} from "react-redux";
import {initializeStore} from "../store/store";

export const App = () =>
    <Provider store={initializeStore()}>
      <div className="App">
        <header className="App-header">
          <p>
            TODO
          </p>
        </header>
        <ItemListContainer></ItemListContainer>
      </div>
    </Provider>

export default App;
