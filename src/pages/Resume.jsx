export default function Resume() {
    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    };
  
    const pdfStyle = {
      width: '60%',
      height: '500px', 
    };
  
    return (
      <div>
        <h1>Resume</h1>
        <p></p>
        <div style={containerStyle}>
          <a href="/src/components/resume23.pdf">Resume</a>
          <embed src="./src/components/resume23.pdf" type="application/pdf" style={pdfStyle} />
        </div>
        <br/>
      </div>
    );
  }
  