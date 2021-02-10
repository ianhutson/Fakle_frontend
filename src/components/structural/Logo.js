import React from 'react'

function Logo() {
    return (
        <div >
            <img className="logo" src={process.env.PUBLIC_URL + "/fuggle_logo.png"}/>
        </div>
    )
}

export default Logo
