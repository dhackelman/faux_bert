import React, { Component} from 'react'; 


class Tab extends Component {
    
    componentDidMount(){
        let otherTabs = document.querySelectorAll('.navigational_tabs_tab');
        otherTabs.forEach((node) => {
            node.style.display = 'none'; 
            if (node.textContent == 'Dashboardx') {
                console.log(node);
                node.classList.add('permanent_on');
                node.classList.toggle('tab_active');
                node.lastChild.remove();
                node.style.display = 'inline'; 
            }
         });
    }
    findActive(arg1, arg2) {
            let otherTabs = document.querySelectorAll('.navigational_tabs_tab');
            otherTabs.forEach((node) => {
                node.classList.remove('tab_active');
            });
            let activeTab = arg1.currentTarget; 
            activeTab.classList.toggle('tab_active'); 
    }
    closeActiveTab(arg1, arg2) {
            let activeTab = arg1.currentTarget; 
            activeTab.parentNode.style.display = 'none'; 
            let otherTabs = document.querySelectorAll('.navigational_tabs_tab');
            otherTabs.forEach((node) => {
                if (node.textContent === 'Dashboard') {
                    console.log(node);
                    node.classList.add('tab_active');
                }
            });
            
    }
    render() {
            
        return(
                <div className="navigational_tabs_tab" onClick={e => this.findActive(e,this.props.tab)}>
                    {this.props.tab}
                    <span className="tab_close" onClick={e => this.closeActiveTab(e,this.props.tab)}>x</span>
                </div>
        );
    }
}

export default Tab;
