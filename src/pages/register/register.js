import { useState } from "react";
import http from "../../axios/axios";
import { useNavigate } from "react-router-dom";
import loading from '../../assets/img/loading.svg'
const Register = () => {
    const [load, setLoad] = useState(false)
    const navigate = useNavigate()
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const form = (e) => {
        setLoad(true)
        e.preventDefault()
        http.post('/register/', {
            username: user,
            password: password,
            password2: password2,
        })
            .then((res) => {
                setLoad(false)
                console.log(res);
                if (res.status === 201) {
                    navigate('/login')
                }
            })
            .catch((err) => {
                setLoad(false)
                console.log(err)
                setTimeout(() => {
                    alert('Xatolik mavjud!')
                }, 100);
            })

        setTimeout(() => {
            e.target.reset()
        }, 100);
    }
    return (
        <>
            <div className={load ? 'opacity-0' : `flex justify-center mt-[15%]`}>
                <div className="w-[40%] bg-[#00000014] backdrop-blur-[10px] p-5 rounded-md">
                    <div className="text-center text-2xl font-extrabold text-white">Register</div>
                    <form id="form" onSubmit={form} className="w-full p-5 rounded-md">
                        <input onChange={(e) => setUser(e.target.value)} className="w-full py-3 border-[1.5px] border-solid border-black rounded-md my-2 outline-none focus:border-green-800 focus:border-[1.5px] pl-4 text-lg" type="text" placeholder="username" />
                        <input onChange={(e) => setPassword(e.target.value)} className="w-full py-3 border-[1.5px] border-solid border-black rounded-md my-2 outline-none focus:border-green-800 focus:border-[1.5px] pl-4 text-lg" type="password" placeholder="password" />
                        <input onChange={(e) => setPassword2(e.target.value)} className="w-full py-3 border-[1.5px] border-solid border-black rounded-md my-2 outline-none focus:border-green-800 focus:border-[1.5px] pl-4 text-lg" type="password" placeholder="repetition password" />
                    </form>
                    <div className="px-5">
                        <button form="form" className="active:bg-transparent outline-none w-full py-3 bg-green-800 font-semibold text-white rounded-md">register</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                {
                    load && <img src={loading} alt="loading" width={80} />
                }
            </div>
        </>
    )
}

export default Register;