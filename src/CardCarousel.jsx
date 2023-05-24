import React from 'react'

const CardCarousel = (props) => {
    return (
        <>
            <section className="pt-5 pb-5">
                <div className="container">
                    <div className="row m-0">
                        <div className="col-6 text-right">
                            <a className="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                                <i className="fa fa-arrow-left"></i>
                            </a>
                            <a className="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                                <i className="fa fa-arrow-right"></i>
                            </a>
                        </div>
                        <div className="col-12">
                            <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">

                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row">

                                            <div className="col-md-4 mb-3">
                                                <div className="card">
                                                    <img className="img-fluid" alt="100%x280" src=""/>
                                                        <div className="card-body">
                                                            <p>{props.name1}</p>
                                                        </div>

                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="card">
                                                    <img className="img-fluid" alt="100%x280" src=""/>
                                                        <div className="card-body">
                                                        <p>{props.name2}</p>
                                                        </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="card">
                                                    <img className="img-fluid" alt="100%x280" src=""/>
                                                        <div className="card-body">
                                                            <p>{props.name3}</p>
                                                        </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">

                                            <div className="col-md-4 mb-3">
                                                <div className="card">
                                                    <img className="img-fluid" alt="100%x280" src=""/>
                                                        <div className="card-body">
                                                            <p>{props.name4}</p>
                                                        </div>

                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="card">
                                                    <img className="img-fluid" alt="100%x280" src=""/>
                                                        <div className="card-body">
                                                            <p>{props.name5}</p>
                                                        </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="card">
                                                    <img className="img-fluid" alt="100%x280" src=""/>
                                                        <div className="card-body">
                                                            <p>{props.name6}</p>
                                                        </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">

                                            <div className="col-md-4 mb-3">
                                                <div className="card">
                                                    <img className="img-fluid" alt="100%x280" src=""/>
                                                        <div className="card-body">
                                                            <p>{props.name7}</p>
                                                        </div>

                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="card">
                                                    <img className="img-fluid" alt="100%x280" src=""/>
                                                        <div className="card-body">
                                                            <p>{props.name8}</p>
                                                        </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="card">
                                                    <img className="img-fluid" alt="100%x280" src=""/>
                                                        <div className="card-body">
                                                            <p>{props.name9}</p>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CardCarousel
