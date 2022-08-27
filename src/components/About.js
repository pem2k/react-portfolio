import React from 'react'

export default function About() {
    return (
        <div className=" container">
            <div className="bg-dark ">
                

                    <div className="container">
                        <div className="card-body">
                    <div className="row ">
                    <div className="col-sm-12 col-lg-8">
                            <h5 className="card-title text-left text-light mb-3 mx-auto">About</h5>
                        </div>
                    </div>
                        <div className="row">
                            <div className="col-sm-12 col-lg-8" >
                                <p className=" text-light text-justify mb-4">
                                    I'm a former IT Help Desk Specialist and Administrator  with a passion for building modern, functional, and secure applications for my clients.

                                    My time in IT gave me a unique insight into what makes using applications challenging for those who are less technically savvy. My aim with every app I build is to provide an accessible and powerful tool that addresses the challenges I helped those users face.

                                </p>

                                <p className="text-light text-justify mb-4">In my spare time I play guitar, attend SSBM tournaments, and create demo projects to practice my web development skills.</p>
                                <p className="text-light text-justify">If you're looking for a web developer, please contact me! I'm open to both freelance and full time work. I'd love to discuss your project's or role's needs!</p>
                            </div>
                            <img src="./dev-pic-min.png" className="col-sm-12 col-lg-4 rounded-circle pb-3" alt="Smiling web developer"/>
                        </div>
                    </div>
                </div>
            </div>
       
        </div>
    )
}
