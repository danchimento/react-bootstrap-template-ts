import React, { Component, ReactNode } from 'react';
import { ResizableBox, Resizable } from 'react-resizable';
import './PanelContainer.scss';

interface Props {
    children: ReactNode,
    minWidth: number,
    maxWidth: number,

}

class PanelContainer extends Component<Props> {
    public static defaultProps = {
        minWidth: 150,
        maxWidth: 600
    };

    render() {
        return <ResizableBox 
            width={200} height={200}
            resizeHandles={["e"]}
            minConstraints={[100, 100]} maxConstraints={[300, 300]}
            className='c-panel-container'>{this.props.children}</ResizableBox>
    } 
}

export default PanelContainer;


