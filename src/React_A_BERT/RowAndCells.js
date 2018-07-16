import React, { Component} from 'react'; 

class RowAndCells extends Component {

    render() {
         return(
                <tr className="">
                    <td>{this.props.info.teamName}</td>
                    <td>{this.props.info.ticketNumber}</td>
                    <td>{this.props.info.clientName}</td>
                    <td>{this.props.info.type}</td>
                    <td>{this.props.info.level}</td>
                    <td>{this.props.info.toID}</td>
                    <td>{this.props.info.fromID}</td>
                    <td>{this.props.info.time}</td>
                    <td>{this.props.info.problemAbstract}</td>
                </tr>
        );
    }
}

export default RowAndCells;
