import React from 'react'



export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide text-center" data-ride="carousel">
                <div className="carousel-inner ">
                    <div className="carousel-item active h-25">
                        <div className="jumbotron jumbotron-fluid">
                            <div className="container">
                                <h1 className="display-4">Web Dev</h1>
                                <p className="lead">By Parker McKillop</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="jumbotron jumbotron-fluid">
                            <div className="container">
                                <h1 className="display-4">Front End</h1>
                                <p className="lead">React, JS, Bootstrap, Materialize, and more!</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="jumbotron jumbotron-fluid">
                            <div className="container">
                                <h1 className="display-4">Back End</h1>
                                <p className="lead">Node.js, Express, SQL/noSQL</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </button>
            </div>
        </div>
    )
}
