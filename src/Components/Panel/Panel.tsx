import React, { ReactNode } from 'react';
import './Panel.scss';

interface Props {
    children?: ReactNode,
    className?: string
}

const defaultProps: Props = {
    children: null
}

const Panel: React.FunctionComponent = (props: Props) => {
    
    return (
        <div className={`c-panel ${props.className}`}>
            {props.children}
        </div>
    )
}

Panel.defaultProps = defaultProps;

export default Panel;


