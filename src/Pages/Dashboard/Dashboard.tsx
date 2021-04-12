import React from 'react';
import Panel from '../../Components/Panel/Panel';
import PanelContainer from '../../Components/PanelContainer/PanelContainer';
import './Dashboard.scss';

const Dashboard = () => {
    return <div>
        <PanelContainer>
            <Panel>
                    <button className="btn btn-primary">Testing </button>
            </Panel>
            <Panel>
                    <button className="btn btn-primary">Testing </button>
            </Panel>
            <Panel>
                    <button className="btn btn-primary">Testing </button>
            </Panel>
            <Panel>
                    <button className="btn btn-primary">Testing </button>
            </Panel>
        </PanelContainer>
        
    </div>
}

export default Dashboard;