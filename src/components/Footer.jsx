
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer style={{ ...footerStyle, position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          <a href="https://www.linkedin.com/in/jacob-mobley-539851164/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
          </a>
        </li>
        <li style={listItemStyle}>
          <a href="https://github.com/mobleyj2" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <FontAwesomeIcon icon={faGithub} style={iconStyle} />
          </a>
        </li>
        <li style={listItemStyle}>
          <a href="https://www.facebook.com/profile.php?id=100084717244799" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <FontAwesomeIcon icon={faFacebook} style={iconStyle} />
          </a>
        </li>
      </ul>
    </footer>
  );
};


const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px',
  textAlign: 'center',
};

const listStyle = {
  listStyle: 'none',
  padding: '0',
  
};

const listItemStyle = {
  display: 'inline-block',
  margin: '0 10px',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '18px',
};
const iconStyle = {
    marginRight: '50px', 
    fontSize: '30px'
};

export default Footer;



