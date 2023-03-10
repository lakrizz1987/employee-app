const baseUrl = `https://users-49bf9-default-rtdb.europe-west1.firebasedatabase.app`;

const getAll = async () => {
    try {
        const res = await fetch(`${baseUrl}/users.json`);
        if (!res.ok) {
            const err = await res.json();
            throw new Error({ message: err.message })
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error)
    }
};

const getAllTasks = async () => {
    try {
        const res = await fetch(`${baseUrl}/tasks.json`);
        if (!res.ok) {
            const err = await res.json();
            throw new Error({ message: err.message })
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error)
    }
};


const getOneById = async (id) => {
    try {
        const res = await fetch(`${baseUrl}/users/${id}.json`);
        if (!res.ok) {
            const err = await res.json();
            throw new Error({ message: err.message })
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error)
    }
};


const api = {
    getAll,
    getOneById,
    getAllTasks
}

export default api;