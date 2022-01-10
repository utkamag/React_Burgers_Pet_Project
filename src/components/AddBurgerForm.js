import React from "react";


class AddBurgerForm extends React.Component {

    render() {


        const nameRef = React.createRef()
        const priceRef = React.createRef()
        const statusRef = React.createRef()
        const descRef = React.createRef()
        const imageRef = React.createRef()

        let createBurger = (event) => {
            event.preventDefault()
            const burger = {
                name: nameRef.current.value,
                price: parseFloat(priceRef.current.value || 0),
                status: statusRef.current.value,
                desc: descRef.current.value,
                image: imageRef.current.value
            }
            this.props.plusBurger(burger)
            event.currentTarget.reset()
        }


        return (
            <form className="burger-edit" onSubmit={createBurger}>
                <input ref={nameRef} name="name" type="text" placeholder="Name" autoComplete="off"/>
                <input ref={priceRef} name="price" type="text" placeholder="Price" autoComplete="off"/>
                <select ref={statusRef} name="status" className="status">
                    <option value="avaliable">Доступно</option>
                    <option value="unavaliable">Убрать из меню</option>
                </select>
                <textarea ref={descRef} name="desc" type="text" placeholder="Desc"/>
                <input ref={imageRef} name="image" type="text" placeholder="Image" autoComplete="off"/>
                <button type="submit">Добавить в меню</button>


            </form>
        )
    }
}

export default AddBurgerForm