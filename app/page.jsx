import Image from 'next/image'
import Link from 'next/link'
import Intro_Img from '../public/fischl_bg.jpg'
import Skills from './components/skills'
export default function Home() {
  return (
    <main  className="py-6 backdrop-contrast-75" style={{backgroundColor: 'rgba(213,81,162,0.8)' }}>

      <div className="flex justify-center">
        <img src={'intro_img.jpg'} alt="Paul Main Picture" width={300} height={900}/>
      </div>
      <br />
      
      <h2 className="flex justify-center font-extrabold text-6xl white-text-shadow ">Paul Josef P. Agbuya</h2>
      <h2 className="flex justify-center font-extrabold text-1xl sub-h">Graduate in BS Computer Science of De La Salle University</h2>
     <div className="flex justify-center gap-4 my-4">
      <a href="https://github.com/your-username" target="_blank">
          <Image src={"https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"} alt="GitHub"
              width={200} height={100}/>
      </a>

      <a href="https://linkedin.com/in/your-id" target="_blank">
          <Image src={"https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"}  alt="LinkedIn"
              width={200} height={100}/>
      </a>
    </div> 

      <div className="card-default">
      <p className="intro-text ">Student committed with
any tasks and aspiring to develop his
skills regarding Computer Science or
workplace related fields. Adapts quickly
on situations and builds strong social
relationships among other peers or coworkers. Confident in arithmetic and 
Tutoring particular Math-related or Computer Science related topics. Currently interested in the field of
AI generation, Data Analysis, and Empathic Computing. 

</p>

      </div>
     




      <br/><br/>
      <Skills/>

      {/* <div className="card-default">
        <h3>New member of the web dev team...</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupti.</p>
      </div>
      <div className="card-default">
        <h3>New website live!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupti, assumenda distinctio adipisci, cupiditate minima eum vitae? Similique dicta est facilis debitis, autem temporibus quo repellat illum unde id iste veritatis eveniet, aspernatur enim quas.</p>
      </div> */}
    </main>
  )
}

// about.jsx -> /about

