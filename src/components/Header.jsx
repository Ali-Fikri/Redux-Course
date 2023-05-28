import { useSelector } from "react-redux";

const Header = () => {
  const { name } = useSelector(state => state.user.userData)

  return (
    <header className="header">
      <h1>Coderz Academy</h1>
      <p>Hello {name}</p>
    </header>
  );
};

export default Header;
