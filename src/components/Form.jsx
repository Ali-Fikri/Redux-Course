
const Form = ({setName, setEmail, addUser}) => {
  return ( <form className="form" onSubmit={addUser}>
    <div className="form-group">
      <input type="text" name="" placeholder="Enter Name" id="" onChange={(e) => setName(e.target.value)} />
    </div>
    <div className="form-group">
      <input type="email" name="" placeholder="Enter Email" id="" onChange={(e) => setEmail(e.target.value)} />
    </div>
    <div className="form-group">
      <input type="submit" name="" placeholder="Add User" id="" />
    </div>
  </form> );
}
 
export default Form; 
