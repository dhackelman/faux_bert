import React, { Component} from 'react'; 
import ContentHeader from './ContentHeader'; 
import ContentTable from './ContentTable'; 


class EscalationLists extends Component {
    render() {
        return(
                <div className="escLists_container" panelname='Escalation Listsx'>
                     <div className="teamPathLists_container">
                        <ContentHeader text={'TeamPathList'} />
                        <ContentTable info={false} />
                     </div>
                     <div className="teamContactDetails_container">
                        <ContentHeader text={'TeamInfo'} />
                        <ContentTable  info={false}/>
                        <ContentTable  info={false} />

                    </div>
                </div>
        );
    }
}

export default EscalationLists;
