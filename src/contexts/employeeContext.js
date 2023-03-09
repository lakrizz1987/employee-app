import { createContext, useState } from "react";

const EmployeesContext = createContext();

export const ItemProvider = ({ children }) => {


    const [employees, setEmployees] = useState([]);

    
    return (
        <EmployeesContext.Provider value={{ employees }}>
            {children}
        </EmployeesContext.Provider>
    )
}