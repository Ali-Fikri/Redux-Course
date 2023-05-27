
const Header = ({ name, isChanged }) => {
  return (
    <header className="header">
      <h1>Coderz Academy</h1>
      <p>Hello {isChanged && name}</p>
    </header>
  );
};

export default Header;
