import React, {Component, useState} from "react";
import '../styles/App.css';
import Description from "./Description";
import Name from "./Name";

class App extends Component {
    render() {

        return(
            <>
               <Name/>
               <Description/>
            </>
        )
    }
}


export default App;
