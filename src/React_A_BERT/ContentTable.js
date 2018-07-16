import React, { Component} from 'react'; 
import HeaderRow from './HeaderRow';
import DataRow from './DataRow';

class ContentTable extends Component {
    render() {
         return(
                <div className="table_container">
                    
                    <table className="">
                        <HeaderRow info={this.props.info} />
                        <DataRow info={this.props.info} />
                    </table>
                </div>
        );
    }
}

export default ContentTable;
