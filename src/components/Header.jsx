import jake from "./me.png"

const Header = () => {
  const headerStyle = {
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
    background: 'linear-gradient(to bottom, #007bff, #00bfff)',
    textAlign: 'center',
    fontSize: '48px',
    color: 'white',
    textTransform: 'CamelCase',
    fontWeight: 'bold',
    position: 'relative',
    fontFamily: 'CustomFont, Arial',
  };

  const avatarStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    border: '3px solid white',
    position: 'absolute',
    top: '50px', 
    background: `url(${jake}) right/cover`, 
    right: 30,
    
  };
  const topToneStyle = {
    backgroundColor: '#007bff', // Top color in blue
    height: '10%',
    width: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    clipPath: 'polygon(0 0, 100% 0, 100% 50%, 50% 100%, 0 50%)',
  };

  const bottomToneStyle = {
    backgroundColor: '#00bfff', // Bottom color in blue
    height: '50%',
    width: '100%',
    position: 'absolute',
    bottom: '0',
    left: '0',
    clipPath: 'polygon(0 50%, 50% 100%, 100% 50%, 100% 100%, 0 100%)',
  };

  const shadowStyle = {
    content: "''",
    position: 'absolute',
    height: '20px',
    width: '100%',
    bottom: '0',
    left: '0',
    background: 'inherit',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    zIndex: '-1',
  };

  const topShadowStyle = {
    ...shadowStyle,
    bottom: 'auto',
    top: '0',
    clipPath: 'polygon(0 0, 100% 0, 100% 20px, 50% 50px, 0 20px)',
  };

  return (
    <header style={headerStyle}>
      <div style={topToneStyle}></div>
      <div style={bottomToneStyle}></div>
      <h1 style={{ margin: '0' }}>Jake Mobley</h1>
      <div style={avatarStyle}></div> {/* Add the avatar */}
      <div style={topShadowStyle}></div>
      <div style={shadowStyle}></div>
    </header>
  );
};

export default Header;

