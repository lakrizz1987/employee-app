import './EmloyeeForm.css';

const EmployeeForm = () => {
    return (
        <form className="employee-form" action="">
            <label for="fullName">Full name:</label>
            <input type="text" id="fullName" name="fullName" defaultValue='' required/>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" defaultValue='' required/>
            <label for="email">Phone:</label>
            <input type="number" id="phone" name="phone" defaultValue='' required/>
            <label for="date">Birth Date:</label>
            <input type="date" id="date" name="date" defaultValue='' required />
            <label for="salary">Salary:</label>
            <input type="number" id="salary" name="salary" defaultValue='' required/>
            <input type="submit" value="Create" />
        </form>
    )
}

export default EmployeeForm;