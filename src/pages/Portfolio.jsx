

export default function Portfolio() {
  const containerStyle = {
    display: 'grid',
    placeItems: 'center',
    
  };

  
   
  

  const imageStyle = {
    width: '60%',
    height: 'auto', // Maintains aspect ratio
   
  };

  return (
    <div>
      <h1>Portfolio</h1>
      <p>
        These are just some of the projects I have worked on.
      </p>
      <div style={containerStyle}>
        <a href ="https://github.com/JuanMartinez503/Movie-Search-Engine.git">Movie</a>
        <img src="./src/components/moviemagic.png" alt="Movie" style={imageStyle} />
      </div>
      <br>
      </br>
      
      <div style={containerStyle}>
      <a href ="https://github.com/mobleyj2/SQL-Database.git">SQL DataBase</a>
        <img src="./src/components/12.png" alt="db" style={imageStyle} />

      </div>

      <br>
      </br>
      <div style={containerStyle}>
      <a href ="https://github.com/mobleyj2/Shapes-and-Name.git">Logo Generator</a>
        <img src="./src/components/Shapes.png" alt="db" style={imageStyle} />
      </div>


      <br>
      </br>
      <div style={containerStyle}>
      <a href ="https://github.com/mobleyj2/Note-taker.git">Notes </a>
        <img src="./src/components/notes.png" alt="db" style={imageStyle} />
      </div>

      <br>
      </br>
      <div style={containerStyle}>
      <a href ="https://github.com/mobleyj2/PWA-Text-Edit.git">PWA Text</a>
        <img src="./src/components/Jate.png" alt="db" style={imageStyle} />
      </div>


      <br>
      </br>
      <div style={containerStyle}>
      <a href ="https://github.com/mobleyj2/study-guide.git">Study Guide</a>
        <img src="./src/components/study.png" alt="db" style={imageStyle} />
      </div>

<br>
</br>
    </div>



  );
}
