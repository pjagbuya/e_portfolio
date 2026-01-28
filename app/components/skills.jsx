import Link from 'next/link'

import Image from 'next/image'

function skills() {
  return (

<div className="container">
  <p className="container-title">Personal Skills</p>

  <div className="gradient-cards">
    <div className="card">
      <div className="container-card bg-green-box">
        <div className="flex items-center">
        <Image src={'/leadership.png'} alt={'Leadership Icon'}  width={100} height={100}/>
        <p className="card-title  align-middle">Leadership Skills</p>
        </div>
       
        <p className="card-description">Experienced in AGILE project management and Web Development Manager. Academic Club President in Junior High School and an External Affair Vice President during my time in De La Salle University</p>
      </div>
    </div>

    <div className="card">
      <div className="container-card bg-white-box">
        
        <div className="flex items-center">
        <Image src={'/math.png'} alt={'Math Icon'} width={100} height={100}/>
        <p className="card-title">Mathematical Skills</p>
        </div>
        <p className="card-description">Well versed in subject matters of Differential Calculus, Matrix Mathematics, Machine Learning Algorithms, and Statistical Analysis</p>
      </div>
    </div>

    <div className="card">
      <div className="container-card bg-yellow-box">
      <div className="flex items-center">
        <Image src={'/programmer.png'} alt={'programmer Icon'} width={100} height={100}/>
        <p className="card-title">Programming Skills</p>
        </div>
        <p className="card-description"> Well-versed in the matter of of React, Javascript, HTML, CSS, Flask, Kotlin, Unity, Assembly x86-6 CISC, and more. Adept with digital image processing and machine learning concepts held in python/Jupyter Notebook.</p>
      </div>
    </div>

    <div className="card">
      <div className="container-card bg-blue-box">
      <div className="flex items-center">
        <Image src={'/learner.png'} alt={'learner Icon'} width={100} height={100}/>
        <p className="card-title pl-5">Quick Learner</p>
        </div>
        <p className="card-description"> Can quickly adapt to concepts given a relatively short period of time. Helped me throughout the years in College learning various Computer Organization and Architercute, Data Structure, and Programming Paradigms</p>
      </div>
    </div>
  </div>
</div>

  )
}

export default skills


