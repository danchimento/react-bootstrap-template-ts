import React from 'react';
import Panel from '../../Components/Panel/Panel';
import PanelContainer from '../../Components/PanelContainer/PanelContainer';
import './Dashboard.scss';

const Dashboard = () => {
    return (<div className='dashboard'>
        <div>Main content</div>
        <PanelContainer className='panels'>
            <Panel>
                    Panel 1
            </Panel>
            <Panel>
                    Panel 2
            </Panel>
            <Panel>
                    Panel 3
            </Panel>
            <Panel>
                    Panel 4
            </Panel>
        </PanelContainer>
    </div>)
}

export default Dashboard;