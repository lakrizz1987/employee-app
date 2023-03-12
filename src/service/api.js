const baseUrl = `https://users-49bf9-default-rtdb.europe-west1.firebasedatabase.app`;

const getAll = async () => {
    try {
        const res = await fetch(`${baseUrl}/users.json`);
        if (res.ok === false) {
            const err = await res.json();
            throw new Error({ message: err.message })
        }
        const data = await res.json();
        return data;
    } catch (error) {
        alert(error.message)
    }
};

const addEmployee = async (employee) => {
    try {
        const response = await fetch(`${baseUrl}/users.json`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(employee)
        });
        if (response.ok === false) {
            const errData = await response.json();
            throw new Error(errData.message)
        }
        const data = await response.json();
        return data;
    } catch (err) {
        alert(err.message)
    }
};

const editEmployee = async (employee,id) => {
    try {
        const response = await fetch(`${baseUrl}/users/${id}.json`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(employee)
        });
        if (response.ok === false) {
            const errData = await response.json();
            throw new Error(errData.message)
        }
        const data = await response.json();
        return data;
    } catch (err) {
        alert(err.message)
    }
};

const deleteEmployee = async (id) => {
    try {
        const response = await fetch(`${baseUrl}/users/${id}.json`, {
            method: 'DELETE',
        });
        if (response.ok === false) {
            const errData = await response.json();
            throw new Error(errData.message)
        }
        const data = await response.json();
        return data;
    } catch (err) {
        alert(err.message)
    }
}

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

const getOneTaskById = async (id) => {
    try {
        const res = await fetch(`${baseUrl}/tasks/${id}.json`);
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

const deleteTask = async (id) => {
    try {
        const response = await fetch(`${baseUrl}/tasks/${id}.json`, {
            method: 'DELETE',
        });
        if (response.ok === false) {
            const errData = await response.json();
            throw new Error(errData.message)
        }
        const data = await response.json();
        return data;
    } catch (err) {
        alert(err.message)
    }
};

const addTask = async (task) => {
    try {
        const response = await fetch(`${baseUrl}/tasks.json`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(task)
        });
        if (response.ok === false) {
            const errData = await response.json();
            throw new Error(errData.message)
        }
        const data = await response.json();
        return data;
    } catch (err) {
        alert(err.message)
    }
};


const api = {
    getAll,
    getOneById,
    getAllTasks,
    addEmployee,
    deleteEmployee,
    editEmployee,
    getOneTaskById,
    deleteTask,
    addTask
}

export default api;