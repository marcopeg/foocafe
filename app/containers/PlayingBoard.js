
import React from 'react';
import { connect } from 'react-redux';

@connect(s => s)
export class PlayingBoard extends React.Component {

    dispatch = action => {
        this.props.dispatch(action);
    }

    render() {
        return (
            <div>playing</div>
        );
    }
}
