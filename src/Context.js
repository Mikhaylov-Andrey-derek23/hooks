import React, { useContext } from 'react';

const MyContext = React.createContext();

function Context(){
    return(
        <MyContext.Provider value="Text from Context">
            <Child/>
        </MyContext.Provider>
    )
}

function Child(){

    const value = useContext(MyContext);
       return(
        <h2 className="text-center py-5 my-2">{value}</h2>
    )
}

export default Context;
