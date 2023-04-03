import React, { useEffect, useState } from 'react'
import http from '../../companets/axios/axios'

const Main = () => {
    const [datas, setData] = useState([])
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
                        {/* <th scope="col" className="px-6 py-3">
                            Price
                        </th> */}
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-[#fafcf5] text-center">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-4">
                            Silver
                        </td>
                        <td className="px-6 py-4">
                            Laptop
                        </td>
                        <td className="px-6 py-4">
                            <button className='outline-none px-5 py-1 bg-green-800 rounded-md mx-1 text-white active:bg-transparent active:text-black'>edit</button>
                            <button className='outline-none px-5 py-1 bg-red-800 rounded-md mx-1 text-white active:bg-transparent active:text-black'>delete</button>
                        </td>
                        {/* <td className="px-6 py-4">
                            $2999
                        </td> */}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Main
