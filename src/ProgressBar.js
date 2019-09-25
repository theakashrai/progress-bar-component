/* eslint-disable no-unused-vars */
import './ProgressBar.css';
import React from 'react';
import UnitProgress from './UnitProgress';

class ProgressBar extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {progress: this.props.progress, maxProgress:this.props.max};
    }
    
    createProgressBar() {
        let retEle = [];
        let perCount = (this.state.progress/this.state.maxProgress)*100;
        
        for(let i = 0;i<perCount;i++)
        {
            retEle.push(<UnitProgress key = {i}/>);
        }
        return retEle;
    }

    render() {
        return <div className = 'parent-bar'>
            <div className = 'progress-bar'>{this.createProgressBar()}</div>
            </div>;
    }

}
export default ProgressBar;