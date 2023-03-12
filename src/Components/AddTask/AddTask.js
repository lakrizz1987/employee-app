const AddTask = () => {


    return (
        <form className="employee-form" action="">
            <label htmlFor="fullName">Title:</label>
            <input type="text" id="fullName" name="fullName" defaultValue='' required />
            <label htmlFor="email">Description:</label>
            <textarea id="w3review" name="w3review" rows="8" cols="50" required></textarea>
            <label htmlFor="date">End Date:</label>
            <input type="date" id="date" name="date" defaultValue='' required />
            <input type="submit" value='Create' />
        </form>
    )
}

export default AddTask;