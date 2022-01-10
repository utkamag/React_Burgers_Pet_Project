import React from "react";
import AddBurgerForm from "./AddBurgerForm";


class MenuAdmin extends React.Component {
    render() {
        return (
            <div className="menu-admin">
                <h2>Управление меню</h2>
                <AddBurgerForm plusBurger={this.props.adddBurger}/>
                <button onClick={this.props.loadSampleBurgers}>Загрузить бургеры</button>
            </div>
        )

    }
}

export default MenuAdmin;