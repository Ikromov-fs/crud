import { createContext, useState } from "react";
const Context = createContext()

const ContextProvider = ({ children }) => {
    const [modal, setModal] = useState(false)
    const [modal2, setModal2] = useState(false)
    return (
        <Context.Provider value={{ modal, setModal, modal2, setModal2 }}>{children}</Context.Provider>
    )
}

export { Context, ContextProvider }