import React, { useContext, useState } from "react";
import { Context } from "../../context/contex";
import http from "../../axios/axios";
const Modal = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [img, setImg] = useState('')
    const { modal, setModal } = useContext(Context)

    const handleForm = (e) => {
        e.preventDefault()
        const form = new FormData()
        form.append('name', name)
        form.append('phone_number', phone)
        form.append('address', address)
        form.append('image', img)
        http.post('/clients/', form)
            .then((res) => {
                console.log(res)
                window.location.reload(true)
            })
            .catch((err) => {
                console.log(err)
            })

    }
    return (
        <div className={modal ? `fixed w-[40%] bg-[#00000014] backdrop-blur-[40px] rounded-md mt-[10%]` : 'hidden'}>
            <div className="relative p-6 flex-auto">
                <form onSubmit={handleForm} id="form" className="w-full">
                    <input onChange={(e) => setName(e.target.value)} request={true} className=" w-full outline-none focus:border-[2px] focus:border-solid focus:border-green-800 my-2 py-2 pl-4  rounded-md border-[1.5px] border-solid border-b-slate-500" type="text" placeholder="name" />
                    <input onChange={(e) => setPhone(e.target.value)} className=" w-full outline-none focus:border-[2px] focus:border-solid focus:border-green-800 my-2 py-2 pl-4  rounded-md border-[1.5px] border-solid border-b-slate-500" type="number" placeholder="phone" />
                    <input onChange={(e) => setAddress(e.target.value)} className=" w-full outline-none focus:border-[2px] focus:border-solid focus:border-green-800 my-2 py-2 pl-4  rounded-md border-[1.5px] border-solid border-b-slate-500" type="text" placeholder="address" />
                    <input onChange={(e) => setImg(e.target.files[0])} className=" w-full outline-none focus:outline-dashed my-2 py-2 rounded-md border-[1.5px] border-solid border-b-slate-500" type="file" />

                    <label>
                        <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            onClick={() => setModal(false)}
                        >
                            Save Changes
                        </button>
                    </label>
                    <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        onClick={() => setModal(false)}
                    >
                        Close
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Modal;