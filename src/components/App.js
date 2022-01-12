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
        const burgers = {...this.state.burgers}
        //Доовляем оъект burger в переменну burgers
        burgers[`burger${Date.now()}`] = burger
        // Записать наш новый оъект burgers в state
        this.setState({burgers})
    }

    loadSampleBurgers = () => {
        this.setState({burgers: sampleBurgers})
    }

    addToOrder = (key) => {
        // 1. Делаем копию объекта state
        const order = {...this.state.order}
        //2. Добавить ключ к заказу со значением 1, либо обновить текущее значение
        order[key] = order[key] + 1 || 1
        // 3. Записваем обновленное значение order  в объект state
        this.setState({order: order})
    }


    render() {


        return (
            <div className="burger-paradise">
                <div className="menu">
                    <Header title="Very Hot Burgers"/>
                    <ul className="burgers">
                        {Object.keys(this.state.burgers).map(key => {
                            return <Burger
                                key={key}
                                index={key}
                                addToOrder={this.addToOrder}
                                details={this.state.burgers[key]}/>
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

