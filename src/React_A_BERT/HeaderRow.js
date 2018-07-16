import React, { Component} from 'react'; 
import RowAndCells from './RowAndCells';

class HeaderRow extends Component {
    render() {
        
        const objKeys = {
            ticketNumber: 'Ticket Number', 
            clientName: 'Client Name', 
            type: 'Type', 
            level: 'Level', 
            toID: 'To', 
            fromID: 'From', 
            time: 'Time', 
            problemAbstract: 'Problem Abstract' 
        };
        return(
                <thead className="">
                    <RowAndCells info={objKeys} headers={true}/>
                </thead>
        );
    }
}

export default HeaderRow;
