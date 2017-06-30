import React from 'react';

import ContextResultsCell from './ContextResultsCell.jsx';
import PersonResultsCell from './PersonResultsCell.jsx';

class Results extends React.Component {

    render() {
        var rows = [];
        this.props.path.forEach((segment, i) => {
            if (i == 0) {
                rows.push(<PersonResultsCell key={segment.from.id}
                                             id={segment.from.id}
                                             name={segment.from.name} />)
            }

            rows.push(<ContextResultsCell key={segment.from.id + segment.to.id}
                                          text={segment.context} />);
            rows.push(<PersonResultsCell key={segment.to.id}
                                         id={segment.to.id}
                                         name={segment.to.name} />)
        });

        return (
            <div className="results">
                {rows}
            </div>
        )
    }
}

export default Results;
