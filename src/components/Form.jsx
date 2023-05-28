import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/api";
import { useSelector } from "react-redux";

const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { loading, error } = useSelector((state) => state.user);

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser({ name, email }, dispatch);
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
      {loading ? (
        "Loading"
      ) : (
        <div className="form-group">
          <input type="submit" name="" placeholder="Add User" id="" />
        </div>
      )}
      {error && loading == false ? 'Error !!' : ''}
    </form>
  );
};

export default Form;
