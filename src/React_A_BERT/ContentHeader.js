import React, { Component} from 'react';

class ContentHeader extends Component {
    refreshDataTable(arg1, arg2) {
        console.log(arg1.target); 
        console.log(arg2); 
        this.props.getData(arg2); 
    }
    render() {
        return(
                <div className="content_header">
                    <p>{this.props.text}</p>
                    <span className="glyphicon glyphicon-refresh header_glyphicon" onClick={e => this.refreshDataTable(e, this.props.text)}></span>
                </div>
        );
    }
}

export default ContentHeader;
