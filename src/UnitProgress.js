import React from 'react';
import './UnitProgress.css';

class UnitProgress extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {progress: this.props.progress};
    }
    

    render(){
        return <div className = "unit-box">&nbsp;</div>;
    }

}
export default UnitProgress;