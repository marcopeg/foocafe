
import React from 'react';
import { connect } from 'react-redux';

import { start as startEventsService } from 'services/events-service';

@connect(s => s.app)
export class App extends React.Component {
    componentWillMount() {
        var { dispatch } = this.props;
        dispatch(startEventsService());
    }

    render() {
        return <p>FooCafe Events</p>;
    }
}
