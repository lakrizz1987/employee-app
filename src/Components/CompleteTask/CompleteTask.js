import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../service/api";

const CompleteTask = () => {
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function completeTask() {

            const date = new Date()
            await api.editTask({ completed: true, completedDate: date.toDateString() }, params.id)
            const employee = await api.getOneById(params.employeeId)
            employee.completedTasks.push({ taskId: params.id, completedDate: date.toDateString() })

            await api.editEmployee({ ...employee }, params.employeeId)
        }

        completeTask()

        setTimeout(() => {
            navigate('/')
        }, 1000)

    }, [params.id, navigate, params.employeeId])
}

export default CompleteTask