import React from 'react'

function Logo() {
    return (
        <div >
            <img className="logo" alt="logo" src={process.env.PUBLIC_URL + "/fakle_logo.png"}/>
        </div>
    )
}

export default Logo
