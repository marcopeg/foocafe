
import React from 'react';
import { connect } from 'react-redux';

import { WaitingBoard } from 'containers/WaitingBoard';
import { PlayingBoard } from 'containers/PlayingBoard';
import { ResultsBoard } from 'containers/ResultsBoard';

import { start as startPlayersService } from 'services/players-service';

@connect(s => s.app)
export class App extends React.Component {

    componentWillMount() {
        var { dispatch } = this.props;
        dispatch(startPlayersService());
    }

    render() {
        var { status } = this.props;
        switch (status) {
            case 'waiting':
                return <WaitingBoard />;
            case 'playing':
                return <PlayingBoard />;
            case 'results':
                return <ResultsBoard />;
            default:
                return <div>GhostRider</div>;
        }
    }
}
