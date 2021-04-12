import React, { Component, ReactNode } from 'react';
import './Panel.scss';

interface Props {
    children: ReactNode,
}

class Panel extends Component<Props> {
    public static defaultProps = {
    };

    render() {
        return <div className="c-panel">
            {this.props.children}
        </div>
    } 
}

export default Panel;


