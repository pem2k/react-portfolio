import React from 'react'


const styles = {
    width: "18rem"
}


const data = [
    {
        projectName: "Lancer (In development)",
        image: "./lancer.png",
        desc: "Lancer is a web application built to streamline client/developer interaction and project management in a freelance setting.",
        repoLink: "https://github.com/AdmiralCrunchy/Project_03_Lancer",
        deployedLink: "#"

    },
    {
        projectName: "Chew On It",
        image: "./pizza.png",
        desc: "Chew On It is an app designed to help users discover new restaurants and share their reviews with friends!. Sign up and start chewing today!",
        repoLink: "https://github.com/pem2k/Chew-on-it",
        deployedLink: "https://chew-on-it.herokuapp.com/"

    },
    {
        projectName: "Houser Music (In development)",
        image: "./piano.png",
        desc: "Houser music is a site that allows Jake Houser to manage his music business. As a teacher and performer, Jake is able to share new performance dates, plan and conduct lessons, and accept payments through his site!",
        repoLink: "#",
        deployedLink: "#"

    },
    {
        projectName: "Concertopia",
        image:"./concert.png",
        desc: "Concertopia was built to proivde a user-friendly way to view trending songs, view songs from your favorite artist",
        repoLink: "https://github.com/lpatino1/concertopia",
        deployedLink: "https://lpatino1.github.io/concertopia/"

    }, 
    {
        projectName: "Lancer Backend (In development)" ,
        image: "./lancerBackend.png",
        desc: "lorem ipmsum lorem ipmsum lorem ipmsum lorem ipmsum lorem ipmsum",
        repoLink: "#",
        deployedLink: "#"

    }, 
    {
        projectName: "MVC-blog" ,
        image: "./mvcBlog.png",
        desc: "lorem ipmsum lorem ipmsum lorem ipmsum lorem ipmsum lorem ipmsum",
        repoLink: "https://github.com/pem2k/mvc-blog",
        deployedLink: "https://mvc-blog-attempt-2.herokuapp.com/home"

    }, 


]

export default function Projects(props) {
    return (
        <div className="container" id="projects">
            <div className=" text-light mt-3" id="about">
                <div className="row  mx-auto">
                    {data.map(({ projectName, image, desc, repoLink, deployedLink }) => (

                        <div className="col-12 col-lg-4 bg-dark w-50 mb-3" style={styles}>
                            <div className="ratio ratio-1x1">
                                <img src={image} className="card-img-top rounded" alt="..." />
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title">{projectName}</h5>
                                <p className="card-text">{desc}</p>
                                
                                 <a href={deployedLink} className="btn mb-2 mb-md-0 btn-secondary btn-block btn-rounded">Visit</a>
                               <div className="mb-3"></div>
                              <a href={repoLink}  className="btn mb-2 mb-md-0 btn-secondary btn-block btn-rounded">Repo</a>
                                
                                
                            </div>
                        </div>

                    ))}

                    
                </div>


                        <div className="mb-3"></div>
            </div>
        </div>
        
    )
}
