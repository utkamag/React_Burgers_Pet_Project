import React, {useState} from "react";

import '../css/style.css'
import Header from "./Header";
import Order from "./Order";
import MenuAdmin from "./MenuAdmin";
import sampleBurgers from "../sample-burgers";
import Burger from "./Burger";

class App extends React.Component {

    state = {
        burgers: {},
        order: {}
    }


    AddBurger = (burger) => {

        //Делаем копи state
        const burgers = {...this.state.burger}
        //Доовляем оъект burger в переменну burgers
        burgers[`burger${Date.now()}`] = burger
        // Записать наш новый оъект burgers в state
        this.setState({burger: burgers})
    }

    loadSampleBurgers = () => {
        this.setState({burgers: sampleBurgers})
    }


    render() {


        return (
            <div className="burger-paradise">
                <div className="menu">
                    <Header title="Very Hot Burgers"/>
                    <ul className="burgers">
                        {Object.keys(this.state.burgers).map(key => {
                            return <Burger key={key} index={key} details={this.state.burgers[key]}/>
                        })}
                    </ul>
                </div>
                <Order/>
                <MenuAdmin adddBurger={this.AddBurger} loadSampleBurgers={this.loadSampleBurgers}/>

            </div>
        )
    }
}

export default App

