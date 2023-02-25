import { useNavigate } from "react-router-dom";

const Header = () => {
  const header_styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '2rem',
    width: '100%',
    backgroundColor: 'var(--color-primary-500)',
    color: 'ghostwhite',
  };

  let navigate = useNavigate();
  function handleClick() {
    navigate(`/`);
  }

  return (
    <header style={header_styles}>
      <h1 onClick={handleClick} style={{cursor: 'pointer'}}>📽 YouPipe</h1>
    </header>
  );
};

export default Header;
