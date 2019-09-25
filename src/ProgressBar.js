import React from 'react';
// eslint-disable-next-line no-unused-vars
import UnitProgress from './UnitProgress';
import './ProgressBar.css';


class ProgressBar extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {progress: this.props.progress, maxProgress:this.props.max};
    }
    
    createProgressBar(){
        let retEle = [];
        let perCount = (this.state.progress/this.state.maxProgress)*100;
        
        for(let i = 0;i<perCount;i++)
        {
            retEle.push(<UnitProgress key = {i}/>);
        }
        return retEle;
    }


    render(){
        return <div className = 'progress-bar'>{this.createProgressBar()}</div>;
    }

}
export default ProgressBar;