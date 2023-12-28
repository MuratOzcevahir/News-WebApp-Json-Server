import React from 'react'
import MenuItem from './menu-items/MenuItem'
import "./Menu.css"

function Menu() {
    return (
        <div id='menu_holder' className='container-fluid'>
            <div className=' d-flex justify-content-center'>
                <ul>
                    <MenuItem link="add-news" text="Haber Ekle" />
                    <MenuItem link="list-news" text="Haber Listele" />
                    <MenuItem link="delete-news" text="Haber Sil" />
                </ul>
            </div>

        </div>
    )
}

export default Menu