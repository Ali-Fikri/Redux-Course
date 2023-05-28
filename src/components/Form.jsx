import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser({ name, email }));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name=""
          placeholder="Enter Name"
          id=""
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name=""
          placeholder="Enter Email"
          id=""
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input type="submit" name="" placeholder="Add User" id="" />
      </div>
    </form>
  );
};

export default Form;
