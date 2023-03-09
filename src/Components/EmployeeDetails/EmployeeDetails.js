import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../service/api";

const EmployeeDetails = () => {

    const [employee,setEmployee]= useState();
    const params = useParams();

    useEffect(()=>{
        async function getOneEmployee(){
            const data = await api.getOneById(params.id);
            console.log(data)
        }

        getOneEmployee()
    },[params.id])


    return(
        <section className="details-box">
            {params.id}
        </section>
    )
}

export default EmployeeDetails;