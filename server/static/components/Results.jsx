import React from 'react';

import ResultsCell from './ResultsCell.jsx';

class Results extends React.Component {

    render() {
        var rows = [];
        this.props.path.forEach((segment) => {
            rows.push(<ResultsCell key={segment.id}
                                   src={segment.id}
                                   name={segment.name} />);
        });

        return (
            <div>
                {rows}
            </div>
        )
    }
}

export default Results;
