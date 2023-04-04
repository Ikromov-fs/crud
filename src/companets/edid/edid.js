import React, { useContext, useState } from "react";
import { Context } from "../../context/contex";
import http from "../../axios/axios";
const Edid = ({ edid }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [img, setImg] = useState('')
    const { modal2, setModal2 } = useContext(Context)
    const reflesh = () => {
        window.location.reload(true)
    }

    const handleForm = (e) => {
        e.preventDefault()
        const form = new FormData()
        form.append('name', name ? name : edid.name)
        form.append('phone_number', phone ? phone : edid.phone_number)
        form.append('address', address ? address : edid.address)
        form.append('image', img ? img : edid.image)
        http.put(`/clients/${edid.id}/`, form)
            .then((res) => {
                console.log(res)
                reflesh()
            })
            .catch((err) => {
                if (err.request.status) {
                    alert('Xatolik rasm tanlang! ..png')
                    setModal2(true)
                }
            })
    }
    return (
        <div className={modal2 ? `fixed w-[40%] bg-[#00000014] backdrop-blur-[40px] rounded-md mt-[10%]` : 'hidden'}>
            <div className="relative p-6 flex-auto">
                <form onSubmit={handleForm} className="w-full">
                    <input defaultValue={edid.name} onChange={(e) => setName(e.target.value)} className=" w-full outline-none focus:border-[2px] focus:border-solid focus:border-green-800 my-2 py-2 pl-4  rounded-md border-[1.5px] border-solid border-b-slate-500" type="text" placeholder="name" />
                    <input defaultValue={edid.phone_number} onChange={(e) => setPhone(e.target.value)} className=" w-full outline-none focus:border-[2px] focus:border-solid focus:border-green-800 my-2 py-2 pl-4  rounded-md border-[1.5px] border-solid border-b-slate-500" type="number" placeholder="phone" />
                    <input defaultValue={edid.address} onChange={(e) => setAddress(e.target.value)} className=" w-full outline-none focus:border-[2px] focus:border-solid focus:border-green-800 my-2 py-2 pl-4  rounded-md border-[1.5px] border-solid border-b-slate-500" type="text" placeholder="address" />
                    <input defaultValue={edid.image} onChange={(e) => setImg(e.target.files[0])} className="w-full outline-none focus:outline-dashed my-2 py-2 rounded-md border-[1.5px] border-solid border-b-slate-500" type="file" />
                    <label>
                        <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            onClick={() => setModal2(prev => !prev)}>
                            Save Changes
                        </button>
                    </label>
                </form>
                <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    onClick={() => setModal2(prev => !prev)}> Close
                </button>
            </div>
        </div>
    );
}

export default Edid;