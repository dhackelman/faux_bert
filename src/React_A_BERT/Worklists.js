import React, { Component} from 'react';
import ContentHeader from './ContentHeader'; 
import ContentTable from './ContentTable'; 

class Worklists extends Component {
    

    render() {
        const subscribedTeams = !this.props.worklists ? "" : this.props.worklists;
         return(
                <div className="worklists_container">
                    <div className="content_container_dash">
                        <ContentHeader  text={'Worklists'} getData={this.props.getData}/>
                        <ContentTable info={subscribedTeams}/>
                    </div>
                </div>
        );
    }
}

export default Worklists;
