import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import WeekView from './components/WeekView';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <WeekView />
      </div>
    </Provider>
  );
}

export default App;