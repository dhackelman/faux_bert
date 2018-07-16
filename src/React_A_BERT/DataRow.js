import React, { Component} from 'react'; 
import RowAndCells from './RowAndCells';
// import loadingGif from '../Fonts/panel-loader.gif';

class DataRow extends Component {
    render() {      
        const arraysOfValues = this.props.info != false ? this.props.info.map((item, index) => {
            return (
                item
            )
        })  : [""];
        return(
                    <tbody className="">
                        {
                            arraysOfValues.map((item, index) => {
                                return (
                                    <RowAndCells key={index} info={item} />
                                )
                            })
                        }
                    </tbody>
        );
    }
}

export default DataRow;
