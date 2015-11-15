

// Twitter Bootstrap is included via HTML
require('../app/index.scss');

import React from 'react';
import ReactDOM from 'react-dom';

import FooSpec from '../specs/components/FooSpec';

ReactDOM.render((
    <FooSpec />
), document.getElementById('app'));
