import React, { useEffect, useState } from 'react'
import ComLabel from '../components/atoms/ComLabel'
import ComButton from '../components/atoms/ComButton'
import Navbar from '../components/Navbar'

const Home = () => {

    const [counter, setCounter] = useState(0)
    // getter(counter) = value storage
    // setter(setCounter) = change the value 
    const [data, setData] = useState([])
    const [isLogin, setIsLogin] = useState(false)

    // call api
    const getQuranSurat = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const resData = await response.json()
        console.log(resData)
        setData(resData)
    }
    const Add = () => {
        setCounter(counter + 1)
    }

    const Reduct = () => {
        if (counter > 0){
            setCounter(counter - 1)
        }
    }

    const Reset = () => {
        setCounter(0)
    }

    const handleClick = () => {
        alert("ok")
    }

    useEffect (() => {
        getQuranSurat()
    }, [])

  return (
    <div>
        <Navbar title = "home" isLogin= {isLogin} handleLogin={() => setIsLogin(true)} handleLogout={() => setIsLogin(false)} />     
        <h2>{counter}</h2>
        <button onClick={Add}>Add</button>
        <button onClick={Reduct}>Reduct</button>
        <button onClick={Reset}>Reset</button>

        {/* {
            counter > 0?
            <button onClick={Reduct}>Reduct</button>
            :
            ""
        } */}

        <div>
        <ComLabel label="name" type="text" placeholder= "input your name"/>
        <ComButton title="save" handleClick= {handleClick}/>
        </div>

        <div>
        <ComLabel label="date" type="date"/>
        <ComButton title="save" handleClick= {handleClick}/>
        </div>

        {data.map ((item) => {
            return (
                <div key={item.id}>
                    <p>{item.title}</p>
                </div>
            ) 
        })}
    </div>
  )
}

export default Home
