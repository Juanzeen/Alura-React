import React from "react";

export const ColorModeContext = React.createContext({
    mode: "",
    setM: ()=> {alert("321")},
    toggleMode: ()=> {alert("123")}
});

export default function ColorModeProvider(props){

    const [mode,setM] = React.useState(props.initialMode);

    function toggleMode(){
        if(mode==="light") setM("dark");
        if(mode==="dark") setM("light");
    }

    return(
        <ColorModeContext.Provider value={{mode: mode, setM: setM, toggleMode: toggleMode}}>
            {props.children}
        </ColorModeContext.Provider>
    )
}