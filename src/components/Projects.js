import React from 'react'


const styles = {
    width: "18rem"
}


const data = [
    {
        projectName: "Lancer PM",
        image: "./lancer-min.png",
        desc: "Lancer is a web application built to streamline client/developer interaction and project management in a freelance setting.",
        repoLink: "https://github.com/AdmiralCrunchy/Project_03_Lancer",
        deployedLink: "https://lancerpm.netlify.app/",

    },   
     {
        projectName: "Lancer Backend" ,
        image: "./lancerBackend-min.png",
        desc: "Lancer Backend is the API that powers the lancer project management application.",
        repoLink: "https://github.com/pem2k/Lancer-Backend",
        deployedLink: "https://lancerpm.netlify.app/"

    }, 
    {
        projectName: "Chew On It",
        image: "./pizza-min.png",
        desc: "Chew On It is an app designed to help users discover new restaurants and share their reviews with friends!. Sign up and start chewing today!",
        repoLink: "https://github.com/pem2k/Chew-on-it",
        deployedLink: "https://chew-on-it.herokuapp.com/"

    },
    {
        projectName: "MVC-blog" ,
        image: "./mvcBlog-min.png",
        desc: "This project was an excercie in mvc architecture. Users can post to the site's main feed, view posts, and leave their own comments.",
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
