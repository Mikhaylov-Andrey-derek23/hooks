import React, { Component, useState } from 'react';


class ClasasContainer extends Component{

    componentDidMount(){
        console.log('class : mounth');
    }

    componentDidUpdate(props){
        console.log('class : update');
    }

    componentWillUnmount(){
        console.log('class : unmout');
    }


    render(){
        return(
            <p className="text-center rounded p-3 border  border-success border-5">{this.props.value}</p>
        )
    }
}

function Effect(){

    const [value, setValue ] = useState(0);
    const [visible, setVisible] = useState(true);

    if(visible){
        return(
            <div className="my-5 py-5 bg-light">
                <div className="d-flex my-4 justify-content-center">
                    <button type="button" className="btn btn-primary mx-3" onClick={()=>setValue((v) => v-1)}>-</button>
                    <button type="button" className="btn btn-success mx-3" onClick={()=>setValue((v) => v+1)}>+</button>
                    <button type="button" className="btn btn-secondary mx-3" onClick={()=>setVisible(false)}>Hiden</button>


                </div>
                <HookContainer value={value}/>
                <ClasasContainer value={value}/>
            </div>
        )
    }

    else{
        return(
            <div className="my-5 py-5 bg-light">
                 <div className="d-flex my-4 justify-content-center">
                    <button type="button" className="btn btn-secondary mx-3" onClick={()=>setVisible(true)}>Show</button>
                 </div>

            </div>
        )
    }

    function HookContainer( {value} ){
        return(
            <p className="text-center rounded p-3 border  border-warning border-5">{value}</p>
        )
    }

    
    
    
}

export default Effect;