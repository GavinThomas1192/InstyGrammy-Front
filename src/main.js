import React from 'react';
import ReactDom from 'react-dom';
import App from './component/app';
import {Provider} from 'react-redux';
import appCreateStore from './lib/app-create-store';
import * as utils from './lib/utils';
import {persistStore, autoRehydrate} from 'redux-persist';


let store = appCreateStore();
persistStore(store);

class AppContainer extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

ReactDom.render(<AppContainer />, document.getElementById('root'));

