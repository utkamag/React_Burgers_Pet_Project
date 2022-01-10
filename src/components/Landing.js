import React, {useState} from "react";
import '../css/style.css'
import restaurants from "../sample-restaurants";
import {NavLink} from "react-router-dom";


function Landing() {

    const [display, setDisplay] = useState(true)
    const [title, setTitle] = useState("")
    const [url, setUrl] = useState("")


    const changeDisplay = () => {
        setDisplay(!display)
    }

    const changeTitle = (restaurant) => {
        const {title, url} = restaurant
        setTitle(title)
        setUrl(url)
    }


    return (
        <div className="restaurant_select">
            <div className="restaurant_select_top">

                <div onClick={changeDisplay}
                     className="restaurant_select_top-header">{title ? title : "Ресторан"}</div>

                <div className="arrow_picker"></div>
                <div className="arrow_picker_up"></div>
                <div className="arrow_picker_down"></div>
            </div>

            {display ? <div className="restauraйnt_select_bottom">
                <ul>
                    {restaurants.map(restaurant => {
                        return <li onClick={() => changeTitle(restaurant)}
                                   key={restaurant.id}>{restaurant.title}</li>
                    })}
                </ul>
            </div> : null}

            {display ? (<NavLink to={`/restaurant/${url}`}><button>Перейти в ресторан</button></NavLink>) : null}





        </div>


    )
}

export default Landing;
