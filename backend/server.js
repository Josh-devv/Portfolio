const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path'); // Import the path module

app.use(cors()); // Enable CORS for all routes
app.use('/images', express.static(path.join(__dirname, 'images')));

app.get("/project", (req, res) => {
    res.json({
      projects: [
        {
          id: 1,
          images: ['/images/1.png'],
          tagline: 'A simple e-commerce website',
          name: 'HiFashion Website',
          
        },
        {
          id: 2,
          images: ['/images/2.png'],
          tagline: 'A movie web application',
          name: 'JoshFlix',
        
        },
        {
          id: 2,
          images: ['/images/3.png'],
          tagline: 'A simple landing page',
          name: 'Clear Link',
         
        },
        {
          id: 2,
          images: ['/images/4.png'],
          tagline: 'A simple landing page',
          name: 'MarkLogic',
          
        },
        {
          id: 2,
          images: ['/images/5.png'],
          tagline: 'A Gig-economy website',
          name: 'Hyer',
          
        },
        {
          id: 2,
          images: ['/images/6.png'],
          tagline: 'A portfolio website',
          name: 'Portfolio project',
          
        },
      
      ]
    });
  });
  

  const PORT = process.env.PORT || 3000;
 
  app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
  });