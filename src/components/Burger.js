import React from "react";


class Burger extends React.Component {

    render() {

        const {name, image, price, desc, status} = this.props.details

        const isAvailable = status === "available"


        return (<li className="menu-burger">
                <div className="image-container">
                    <img src={image} alt={name}/>
                </div>

                <div className="burger-details">
                    <h3 className="burger-name">
                        {name}
                        <span className="price">{price} ₽</span>
                    </h3>
                    <p className="desc">{desc}</p>
                    <button
                        className="buttonOrder"
                        disabled={!isAvailable}
                    >{isAvailable ? "Заказать" : "Товара нет!!!"}
                    </button>
                </div>
            </li>
        )
    }
}

export default Burger;