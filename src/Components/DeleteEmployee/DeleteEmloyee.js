import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import api from "../../service/api";

const DeleteEmloyee = () => {
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function deleteData() {
            await api.deleteEmployee(params.id);
            navigate('/')
        }

        deleteData()
    }, [params.id, navigate])

}

export default DeleteEmloyee;