import React from 'react';

import ContextResultsCell from './ContextResultsCell.jsx';

class Results extends React.Component {

    render() {
        var rows = [];
        this.props.path.forEach((segment) => {
            rows.push(<ContextResultsCell key={segment.id}
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
