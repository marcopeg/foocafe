
const __DEBUG__ = true;

// Twitter Bootstrap is included via HTML
require('./index.scss');

import React from 'react';
import ReactDOM from 'react-dom';

import { App } from 'containers/app';
import { makeStore } from 'utils/store';

var Main = require(__DEBUG__ ? 'utils/main-debug' : 'utils/main').Main;

import * as initialStates from '../specs/fixtures/initial-state.fixture';
var store = makeStore(__DEBUG__, initialStates.DEV);

ReactDOM.render((
    <Main
        app={App}
        store={store} />
), document.getElementById('app'));
