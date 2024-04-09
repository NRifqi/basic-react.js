import React from 'react'

const Navbar = (props) => {
  return (
    <div style= {{background: "blue", padding: 20, color: "white", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <div>
            <p>{props.title}</p>
            <p>{props.isLogin ? "you currently login" : "you are not login yet"}</p>
        </div>
        <div>
            {!props.isLogin ?
                <button onClick={props.handleLogin}>Login</button>
                :
                <button onClick={props.handleLogout}>Logout</button>
            }      
        </div>      
    </div>
  )
}

export default Navbar
