import React from 'react';
import { a } from 'react-router-dom';
import YouTubeIcon from '@material-ui/icons/YouTube';
import milk from "../src/images/milk11.jpg";
import vaccum from "../src/images/vaccum11.jpg";
import grinding from "../src/images/grinding.jpg";
import pouch from "../src/images/pouch.jpg";



const Video = () => {
    return (
        <>
            <div className="container-fluid mb-5 my-3">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            <div className="col-md-3 col-10 mx-auto">
                                <div className="card">
                                    <img src={milk} alt={milk} />
                                    <div className="card-body">
                                        <h6>Fully Automatic Soya Milk Making Machine</h6>
                                        <a href="https://www.youtube.com/watch?v=qMA5UNbKe54&feature=emb_logo"
                                            className="btn btn-danger">Watch Video<YouTubeIcon /></a>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-3 col-10 mx-auto">
                                <div className="card">
                                    <img src={grinding} alt={grinding} />
                                    <div className="card-body">
                                        <h6>Soyabean Griding Machine</h6>
                                        <a href="https://www.youtube.com/watch?v=soHCzAQ1EzE&feature=emb_logo"
                                            className="btn btn-danger">Watch Video<YouTubeIcon /></a>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-3 col-10 mx-auto">
                                <div className="card">
                                    <img src={vaccum} alt={vaccum} />
                                    <div className="card-body">
                                        <h6>Semi-Automatic Vaccum Packing Machine</h6>
                                        <a href="https://www.youtube.com/watch?v=I2qlSsu_Qto&feature=emb_logo"
                                            className="btn btn-danger">Watch Video<YouTubeIcon /></a>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-3 col-10 mx-auto">
                                <div className="card">
                                    <img src={pouch} alt={pouch} />
                                    <div className="card-body">
                                        <h6>Pouch Filling Machine</h6>
                                        <a href="https://www.youtube.com/watch?v=yCvO66LkdUA&feature=emb_logo"
                                            className="btn btn-danger">Watch Video<YouTubeIcon /></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
};

export default Video;