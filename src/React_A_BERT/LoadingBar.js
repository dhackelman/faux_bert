import React, { Component} from 'react'; 

class LoadingBar extends Component {
    
    
    render() {
        return(
                <div className="bar_container">
                    <div className="bar_potential_progress">
                        <div className="bar_achieved_progress">Loading<span className="bar_ellipsis"> . . . </span></div>
                    </div>
                </div>
        );
    }
}

export default LoadingBar;
