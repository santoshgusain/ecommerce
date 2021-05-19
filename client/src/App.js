import "./App.css";
import {Provider} from 'react-redux'
import Routes from "routes";

import store from './store'
import Header from "component/Header/index";

function App() {
  return (
    <Provider store={store}>
      <Header/>
    <Routes/>
    </Provider>
  );
}

export default App;
