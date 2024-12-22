import './App.css';
import { Helmet } from 'react-helmet';

import github from './media/github.png';
import linkedin from './media/linkedin.png';
import email from './media/email.png';
import resume from './media/Pietrzyk_Piotr_Software_Development_Resume.pdf'


function App() {

  const githubButton = (
    <button class="glowing-button">
      <img src={github}></img>
      Check it out on GitHub!
    </button>
  );


  return (
    <body>

      <div>
        <Helmet>
          <title>Piotr Pietrzyk - Developer</title>
          <link rel="icon" href="./logo.png"/>
        </Helmet>
      </div>


      <nav class="hide-on-desktop">
        <div class="ham-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>


      <div class="sidebar hide-on-mobile">
        <a href="#home">home</a>
        <a href="#about">who am i?</a>
        <a href="#experience">my experience</a>
        <a href="#projects">my projects</a>
        <a href={resume} target="_blank">my resume</a>

        <div class="sidebar-contact-me">

          <a class="no-hover">connect with me</a>

          <div class="socials">

            <a class="no-hover" href="https://github.com/pipietrzyk" target="_blank">
              <img src={github}></img>
            </a>
            <a class="no-hover" href="https://www.linkedin.com/in/pipietrzyk/" target="_blank">
              <img src={linkedin}></img>
            </a>
            <a class="no-hover" href="mailto:pipietrzyk0@gmail.com" target="_blank">
              <img src={email}></img>
            </a>

          </div>
        </div>
      </div> 

      <div class="header-asteroids" id="home">
      </div>

      <div class="header">

        <h2>
          software engineer
        </h2>

        <h1>
          hi, i'm piotr
        </h1>

      </div>


      <div class="padding-between-sections"></div>


      <div class="generic-section" id="about">

        <h1 class="section-title">
          who am i?
        </h1>

        <p class="about-me">
          I am a software engineer based in Chicago, Illinois. I earned my B.S. in Computer Science and minored in Applied Mathematics at the Illinois Institute of Technology. I'm hardworking and passionate about building efficient solutions for modern problems. I especially love learning about the intricacies of computer systems and seeing what makes them tick.
        </p>

      </div>


      <div class="padding-between-sections"></div>


      <div class="generic-section" id="experience">
        <h1 class="section-title">
          my experience
        </h1>

        <div class="timeline">
          <div class="container left">
            <div class="content">
              <h2> Undergraduate Research Assistant </h2>
              <h4>Illinois Institute of Technology</h4>
              <h4>January 2024 - May 2024</h4>
              <p> Collaborating with a team of two fellow students, I conducted performance benchmarking and analysis of virtual machine function startup metrics. <br></br> <br></br>
                Gained an in-depth understanding of the functions-as-a-service (FaaS) paradigm, where virtualized functions are dynamically scheduled by a resource manager to execute specific tasks and decommissioned upon task completion. <br></br> <br></br>
                Through this experience, I developed a strong foundation in performance evaluation, serverless architectures, and emerging trends in cloud computing.
              </p>
            </div>
          </div>
          <div class="container right">
            <div class="content">
              <h2>IT Helpdesk Intern</h2>
              <h4>The Walsh Group</h4>
              <h4>April 2022 - August 2022</h4>
              <p> Primary responsibilities included updating and maintaining documentation for internal company processes as well as providing remote technical support to employees nationwide. <br></br> <br></br>
              Developed a PowerShell script to automate the backup and remote upload of employee laptop files. <br></br> <br></br>
              Collaborated with a team member to design and implement an inventory tracking system for internal equipment. <br></br> <br></br>
              This experience enhanced my technical problem-solving skills, strengthened my ability to work collaboratively, and deepened my understanding of IT operations within a large organization.
              </p>
            </div>
          </div>
          <div class="container left">
            <div class="content">
              <h2>App Developer</h2>
              <h4>After School Matters</h4>
              <h4>September 2019 - January 2020</h4>
              <p>
              Developed a prototype mobile application leveraging expertise in HTML, CSS, and JavaScript. <br></br> <br></br>
              Implemented Amazon Firebase as the server framework to securely manage and store user account information. <br></br> <br></br>
              Collaborated with team members to refine functionality and ensure a user-friendly design.
              </p>
            </div>
          </div>
        </div>

      </div>


      <div class="padding-between-sections"></div>



      <div class="generic-section" id="projects">
        <h1 class="section-title">
          my projects
        </h1>

        <div class="projects-showcase">
          
          <div class="project">
            <img src="./media/chip8.gif"></img>
            <div class="description">
              <div class="title-and-widgets">
                <h2>Chip8 Emulator</h2>
                <p class="glowing-text">C</p>
                <p class="glowing-text silver">SDL2</p>
                <p class="glowing-text silver">Low Level</p>
                <p class="glowing-text silver">Emulation</p>
              </div>
              <p>A fully functional Chip8 emulator for the COSMAC VIP, a 1970's microcomputer. <br></br> <br></br>
                Specifications include: a 12-bit program counter, 4KB of memory, sixteen 8-bit registers, and a 16-level stack. <br></br> <br></br>
                I utilized the SDL2 graphics library to render graphics and sound. To ensure accurate emulation I also incorporated system-specific quirks. <br></br> <br></br>
                This project provided me with an opportunity to deepen my understanding of low-level computer systems while honing my expertise in C development.
              </p>
              <a href="https://github.com/pipietrzyk/Chip-8" target="_blank">
                {githubButton} 
              </a>
            </div>
          </div>

          <div class="project">
            <img src="./media/lemon.gif" class="img-phone"></img>
            <div class="description">
              <div class="title-and-widgets">
                <h2>Lemon Mobile App</h2>
                <p class="glowing-text">Java</p>
                <p class="glowing-text">Javascript</p>
                <p class="glowing-text silver">Android Studio</p>
                <p class="glowing-text silver">App Development</p>
              </div>
              <p>A prototype mobile application I built for a class project involving business proposal development. <br></br> <br></br>
                I used Android Studio to develop the app, implementing logic with Java and front-end design with HTML, CSS, and JavaScript. <br></br> <br></br>
                Features included: An integrated database for storing user login information, Google Maps integration, and a QR-code scanner. <br></br> <br></br>
                This project allowed me to enhance my skills in mobile application development while strengthening my overall skills in front-end development.
              </p>
              <a href="https://github.com/pipietrzyk/Lemon-Mobile-App" target="_blank">
                {githubButton}
              </a>
            </div>
          </div>

          <div class="project">
            <img src="./media/minesweeper.gif"></img>
            <div class="description">
              <div class="title-and-widgets">
                <h2>Minesweeper</h2>
                <p class="glowing-text">Python</p>
                <p class="glowing-text silver">PyGame</p>
              </div>
              <p>A simple minesweeper application made with PyGame. <br></br> <br></br>
                Implemented a flood-fill algorithm to dynamically reveal surrounding tiles when the initial tile is selected. <br></br> <br></br>
                I did this project to gain experience with the PyGame library and strenghten my skills with Python.
              </p>
              <a href="https://github.com/pipietrzyk/Minesweeper" target="_blank">
                {githubButton}
              </a>
            </div>
          </div>

          <div class="project">
            <img src="./media/sudoku.PNG"></img>
            <div class="description">
              <div class="title-and-widgets">
                <h2>Sudoku Solver</h2>
                <p class="glowing-text">Python</p>
                <p class="glowing-text silver">Artificial Intelligence</p>     
              </div>
              <p>A sudoku solver AI which I built in Python for a class project. <br></br> <br></br>
              Implemented constraint satisfaction with forward checking and minimum-remaining-values (MRV) heuristics for optimized performance. <br></br> <br></br>
              Constraints inherent to the sudoku puzzle are integrated into the algorithm, with forward checking preventing inconsistencies during number assignments and MRV heuristics prioritizing variables with the fewest remaining options. <br></br> <br></br>
              This project enhanced my understanding of artificial intelligence and its application to solving complex problems.
              </p>
              <a href="https://github.com/pipietrzyk/Sudoku-Solver-Constraint-Satisfaction-" target="_blank">
                {githubButton}
              </a>
            </div>
          </div>

        </div>

      </div>


        <div style={{paddingTop: "50px"}}>
          <h1 style={{textAlign: "center", fontSize: "40px"}}>
            if you like what you see...
          </h1>
        </div>


        <div class="padding-between-sections"></div>


        <div class="generic-section">

          <div class="bottom">

            <h1>
              contact me!
            </h1>

            <div class="contact-container">

              <a href="https://www.linkedin.com/in/pipietrzyk/" target="_blank">
                <button class="glowing-button blue">
                  <img src={linkedin}></img>
                  Connect with me on LinkedIn!
                </button>
              </a>

              <p style={{fontSize: "30px"}}>or...</p>

              <a href="mailto:pipietrzyk0@gmail.com" target="_blank">
                <button class="glowing-button">
                  <img src={email}></img>
                  Send me an email!
                </button>
              </a>

            </div>

          </div>

        </div>


    </body>
  );
}

export default App;
