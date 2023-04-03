import { useState } from "react"
import { useNavigate } from "react-router-dom"
import http from "../../companets/axios/axios"
import loading from '../../assets/img/loading.svg'
const Login = () => {
    const [load, setLoad] = useState(false)
    const navigate = useNavigate()
    const [userLogin, setUserLogin] = useState('')
    const [passwordLogin, setPasswordLogin] = useState('')
    const formLogin = (e) => {
        e.preventDefault()
        setLoad(true)
        http.post('/login/', {
            username: userLogin,
            password: passwordLogin,
        })
            .then((res) => {
                setLoad(false)
                if (res.status === 200) {
                    navigate('/main')
                }
            })
            .catch((err) => {
                setLoad(false)
                console.log(err)
            })
    }
    const exit = (e) => {
        e.preventDefault()
        navigate(-1)
    }
    return (
        <>
            <div className={load ? 'opacity-0' : `flex justify-center mt-[15%]`}>
                <div className="w-[40%] bg-[#00000014] backdrop-blur-[10px] p-5 rounded-md">
                    <div className="text-center text-2xl font-extrabold text-white">Login</div>
                    <form id="form" onSubmit={formLogin} className="w-full p-5 rounded-md">
                        <input onChange={(e) => setUserLogin(e.target.value)} className="w-full py-3 border-[1.5px] border-solid border-black rounded-md my-2 outline-none focus:border-green-800 focus:border-[1.5px] pl-4 text-lg" type="text" placeholder="username" />
                        <input onChange={(e) => setPasswordLogin(e.target.value)} className="w-full py-3 border-[1.5px] border-solid border-black rounded-md my-2 outline-none focus:border-green-800 focus:border-[1.5px] pl-4 text-lg" type="password" placeholder="password" />
                    </form>
                    <div className="px-5">
                        <button form="form" className=" active:bg-transparent outline-none w-full py-2 bg-green-800 font-semibold text-white rounded-md">login</button>
                        <button onClick={exit} form="form" className=" active:bg-transparent outline-none w-full py-2 bg-red-800 font-semibold text-white rounded-md mt-3">Exit</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                {
                    load && <img src={loading} alt="loading" width={60} />
                }
            </div>
        </>
    )
}

export default Login;