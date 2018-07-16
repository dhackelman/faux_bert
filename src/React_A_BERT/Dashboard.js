import React, { Component} from 'react'; 
import RecentEscalations from './RecentEscalations';
import Worklists from './Worklists';

class Dashboard extends Component {
    render() {
        return(
                <div className="dashboard_container">
                    <Worklists worklists={this.props.worklists}  getData={this.props.getData}/>
                    <RecentEscalations recentEscalations={this.props.recentEscalations} getData={this.props.getData}/>
                </div>
        );
    }
}

export default Dashboard;
