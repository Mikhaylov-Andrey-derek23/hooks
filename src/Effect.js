import React, { Component, useState, useEffect } from 'react';


class ClasasContainer extends Component{

    componentDidMount(){
        console.log('class : mounth');
    }

    // componentDidUpdate(props){
    //     console.log('class : update');
    // }

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
    const [visableModal, setVisibleModal] = useState(false);

    useEffect(()=>{
        console.log('UseEffect: type mounth')
        return () => console.log('UseEffect: type unmout')
    }, []);
    // useEffect(()=>{
    //     console.log('UseEffect: type update all')
    // }, );

    useEffect(()=>{
        return () => {console.log('Clear visible')}
    }, [visible]);

    


    


    if(visible){
        return(
            <div className="my-5 py-5 bg-light">
                <div className="d-flex my-4 justify-content-center">
                    <button type="button" className="btn btn-primary mx-3" onClick={()=>setValue((v) => v-1)}>-</button>
                    <button type="button" className="btn btn-success mx-3" onClick={()=>setValue((v) => v+1)}>+</button>
                    <button type="button" className="btn btn-secondary mx-3" onClick={()=>setVisible(false)}>Hiden</button>
                    <button type="button" className="btn btn-warning" onClick={()=>setVisibleModal((v)=> !v)}>Launch demo modal</button>


                </div>
                <HookContainer value={value}/>
                <ClasasContainer value={value}/>
                <RandomPlanet id={value}/>
                {visableModal ? <Modal show = {()=>setVisibleModal()}/> : ''}
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

    function Modal({show}){

        const [visible, setVisible] = useState(true)
        useEffect(()=>{
            const timeout = setTimeout (()=>{
                setVisible();
                show();
            },5500)
            return () =>{
                show();
                clearTimeout(timeout);
            }

        }, [show])

        if(visible){
            return(
                <div className="d-flex">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <p>Window closed for 1.5 seconds</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else{
            return(
                <p></p>
            )
        }

    }

    function usePlanetInfo (id){
      
        const [planet, setPlanet] = useState({})


        useEffect(()=>{
            let canseled = false;
            let i = id;
            if(id<0){
                i = id*-1;
            }
            if(id === 0){
                i = 1
            }

            fetch(`https://swapi.dev/api/planets/${i}`)
            .then((res)=>res.json())
            .then(result => {
                result.id = i
                return result
            })
            .then(data => !canseled && setPlanet(data))
            return () => canseled = true

        }
        , [id])

        return planet;
        
    }

  

    function RandomPlanet({id}){

        
        const planet = usePlanetInfo(id);

        if(planet.name){
            return(
                <div className="d-flex flex-column justify-content-center">
                    <h2 className="text-center">Planet SW</h2>
                    <div className="card" style= {{width: "18rem", margin : "2rem auto"}}>
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.id}.jpg`} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{planet.name}</h5>
                            <p className="card-text">{`Rotation period : ${planet.rotation_period}, orbital period : ${planet.orbital_period}, diameter : ${planet.diameter}, climate : ${planet.climate}, gravity : ${planet.gravity}, terrain : ${planet.terrain}, surface water : ${planet.surface_water}, population : ${planet.population} `}</p>
                        </div>
                    </div>
                </div>
            )
        }else{
            return ('')
        }
        
    }

    
    
    
}

export default Effect;