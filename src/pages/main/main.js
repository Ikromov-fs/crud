import React, { useContext, useEffect, useState } from 'react'
import http from '../../axios/axios'
import Edid from '../../companets/edid/edid'
import Modal from '../../companets/modal/modal'
import { Context } from '../../context/contex'
const Main = () => {
    const { setModal2 } = useContext(Context)
    const { setModal } = useContext(Context)
    const [datas, setData] = useState([])
    const [edid, setEdid] = useState([])
    useEffect(() => {
        http.get(`/clients/`, {
            headers: {
                'Authorization': 'Basic YWRtaW46MTIz'
            }
        })
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    const deleted = (id) => {
        console.log(id)
        http.delete(`/clients/${id}`)
            .then((res) => {
                console.log(res)
                alert(`User o'chirildi!`)
                window.location.reload(true)
            })
    }
    const edited = (item) => {
        setModal2(true)
        setEdid(item)
        // http.post(`//`)
    }
    return (
        <div className="relative flex justify-center mt-5">
            <table className="w-[950px] bg-[#00000014] rounded-md">
                <thead className="text-white uppercas">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Phone
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Address
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datas.map((item) => (
                            <tr key={item.id} className="border-[1.5px] border-solid border-b-slate-400  bg-[#fafcf5] text-center">
                                <th scope="row" className=" border-[1.5px] border-solid border-b-slate-400 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.name}
                                </th>
                                <td className="px-6 py-4 border-[1.5px] border-solid border-b-slate-400">
                                    {item.phone_number}
                                </td>
                                <td className="px-6 py-4 border-[1.5px] border-solid border-b-slate-400">
                                    {item.address}
                                </td>
                                <td className="px-6 py-4 ">
                                    <button onClick={() => edited(item)} className='outline-none px-5 py-1 bg-green-800 rounded-md mx-1 text-white active:bg-transparent active:text-black'>edit</button>
                                    <button onClick={() => deleted(item.id)} className='outline-none px-5 py-1 bg-red-800 rounded-md mx-1 text-white active:bg-transparent active:text-black'>delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className='absolute bottom-[-50px]'>
                <button onClick={() => setModal(prev => !prev)} className='outline-none rounded-md active:bg-transparent px-9 py-1 bg-green-600 text-white'>add user</button>
            </div>
            <Modal />
            <Edid edid={edid} />
        </div>
    )
}

export default Main
