import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../service/api";

const CompleteTask = () => {
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function completeTask() {
             
           await api.editTask({completed:true,completedDate:Number(new Date().getMonth())+1},params.id)
           const employee = await api.getOneById(params.employeeId)
           const date = new Date()
           employee.completedTasks.push({taskId:params.id, completedDate:date.toDateString()})
          
           await api.editEmployee({...employee },params.employeeId)
        }

        completeTask()

        setTimeout(()=>{
            navigate('/')
        },1000)
        
    }, [params.id,navigate,params.employeeId])
}

export default CompleteTask