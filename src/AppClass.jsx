import React from "react";
import colors from "./src/common/colors";
import "./App.scss";

class AppClass extends React.Component {
    constructor(props){
        super();
        console.log('constructor');
        this.state = {};
    }

    componentDidMount () {
        console.log('componentDidMount');

        const randomIndex = Math.floor(Math.random() * colors.length);
        document.body.style.backgroundColor = colors[randomIndex];
        console.log(randomIndex);
        this.setState ({currentIndexColor: randomIndex});
    }
    render () {
        return (
        <div id="app">
        <h1 id="current-color">{colors[this.state.currentIndexColor]}</h1>
    
        <div className="colors"></div>
        {
            colors.map (
                (color, index) => 
                 <button
                 key = {`color-${index}`}
                 style = {{
                    backgroundColor : color
                 }}
                 className = {index === this.state.currentIndexColor? 'active' : ''}
                 onClick={() => {
                    document.body.style.backgroundColor = colors[index];
                    this.setState({currentIndexColor: index})
                 }}
                 >
              
                 </button>
            )
        }
      </div>
    
        );
    }
}

export default AppClass;