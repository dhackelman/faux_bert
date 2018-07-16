import React, { Component} from 'react'; 
import Tab from './Tab'; 


class NavigationalTabs extends Component {
    render() {
        let theTabList = [
            'Dashboard', 
            'Escalated Ticket/Order',
            'Escalation Lists', 
            'Environment Broadcast', 
            'Teams',
            'Cron Jobs', 
            'Ticket Routing', 
            'WFA Order Routing', 
            'ATX Routing', 
            'AQE ID Lookup', 
            'ROE Timers',
            'Settings', 
            'OCO Zone Table',
            'Teams', 
            'Cron Jobs', 
            'EPT', 
            'Auto Escalate Timers'
        ];
        return(
                <div className="navigational_tabs_container">
                {
                    theTabList.map((item, index) => {
                        return (
                            <Tab key={index} tab={item} />
                        )
                    })
                }
                </div>
        );
    }
}

export default NavigationalTabs;
