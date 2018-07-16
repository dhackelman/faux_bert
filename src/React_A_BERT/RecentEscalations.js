import React, { Component} from 'react'; 
import ContentHeader from './ContentHeader';
import ContentTable from './ContentTable'; 

class RecentEscalations extends Component {
    render() {
        let recentEscInfo = this.props.recentEscalations ? this.props.recentEscalations : false;
        return(
                <div className="recentEsc_container">
                    <div className="content_container_dash">
                        <ContentHeader  text={'Recent Escalations'} getData={this.props.getData}/>
                        <ContentTable info={recentEscInfo}  />
                    </div>
                </div>
        );
    }
}

export default RecentEscalations;
