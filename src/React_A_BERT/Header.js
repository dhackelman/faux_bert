import React, { Component} from 'react'; 

class Header extends Component {
    revealTab(arg1, arg2){
        const dashboardPanel = document.querySelector('.dashboard_container');
        dashboardPanel.style.display = 'none';
        let otherTabs = document.querySelectorAll('.navigational_tabs_tab');
        otherTabs.forEach((node) => {
            node.classList.remove('tab_active');
            if (node.textContent === arg2) {
                console.log(arg2);
                node.style.display = 'inline';
                node.classList.toggle('tab_active');
                let newPanelDisplay = document.querySelectorAll(`[panelname='` + arg2 +`']`);
                newPanelDisplay[0].style.display = 'flex';
                newPanelDisplay[0].classList.add = 'active_panel';
            }
        });
    }
    render() {
        return(
                <div className="header">
                    <div className="nav_title">
                        <a className="nav_title_link">BERT</a>
                    </div>
                    <div className="nav_icons">
                        <span className='menu-glyph-wrap'>
                            <span aria-hidden="true" className="glyphicon glyphicon-open" onClick={e => this.revealTab(e, 'Escalated Ticket/Orderx')}></span>
                        </span>
                        <span className='menu-glyph-wrap'>
                            <span aria-hidden="true" className="glyphicon glyphicon-road" onClick={e => this.revealTab(e, 'Escalation Listsx')}></span>
                        </span>
                        <span className='menu-glyph-wrap'>
                            <span aria-hidden="true" className="glyphicon glyphicon-list-alt" onClick={e => this.revealTab(e, 'OCO Zone Tablex')}></span>
                        </span>
                        <span className='menu-glyph-wrap'>
                            <span aria-hidden="true" className="glyphicon glyphicon-stats" onClick={e => this.revealTab(e, 'Reportingx')}></span>
                        </span>
                        <span className='menu-glyph-wrap'>
                            <span className="glyphicon glyphicon-cog" aria-hidden="true" onClick={e => this.revealTab(e, 'Settingsx')}></span>
                        </span>
                        <span className='menu-glyph-wrap'>
                            <span className="glyphicon glyphicon-user" aria-hidden="true" onClick={e => this.revealTab(e, '')}></span>
                        </span>
                        <span className='menu-glyph-wrap'>
                            <span className="glyphicon glyphicon-search" aria-hidden="true" onClick={e => this.revealTab(e, '')}></span>
                        </span>
                        <span className='menu-glyph-wrap'>
                            <span className="glyphicon glyphicon-question-sign" aria-hidden="true" onClick={e => this.revealTab(e, '')}></span>
                        </span>
                    </div>
                </div>
        );
    }
}

export default Header;
