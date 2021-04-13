import React, { ReactNode } from 'react';
import { ResizableBox } from 'react-resizable';
import './PanelContainer.scss';

interface Props {
    children?: ReactNode,
    minWidth?: number,
    maxWidth?: number,
    backgroundColor?: string,
    className?: string
}

const defaultProps: Props = {
    children: null,
    minWidth: 150,
    maxWidth: 600,
    backgroundColor: "#666"
}

const PanelContainer: React.FunctionComponent<Props> = (props: Props) => {
    return (
        <div className={`c-panel-container ${props.className}`}>
            <ResizableBox
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                width={props.minWidth!} height={Infinity}
                resizeHandles={["w"]}
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                minConstraints={[props.minWidth!, 0]} maxConstraints={[props.maxWidth!, 300]}>{props.children}
            </ResizableBox>
        </div>
    )
}

PanelContainer.defaultProps = defaultProps;

export default PanelContainer;


