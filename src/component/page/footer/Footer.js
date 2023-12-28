import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div id='footer_holder' className='continer-fluid position-fixed bottom-0'>

            <div className='d-flex  flex-column h-100 w-100 justify-content-between'>
                <div>
                    Güncel haberler
                </div>
                <div className='w-100 text-center'>
                    Copyright
                </div>

            </div>

        </div>
    )
}

export default Footer