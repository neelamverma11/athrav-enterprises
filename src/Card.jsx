import React from 'react'
import { NavLink } from 'react-router-dom';
import web from '../src/images/milk&paneer.jpg';

const Card = (props) => {
    return (
        <>


            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                    <div className="card-body">
                        {/* <h3 className="card-header">{props.header}</h3> */}
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.content1}</p>

                        <div className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td className="font-weight-bold" style={{ fontsize: "small" }}>{props.content2}</td>
                                    <td style={{ fontsize: "small" }}>{props.content3}</td>
                                </tr>
                                <tr>
                                    <td className="font-weight-bold" style={{ fontsize: "small" }}>{props.content4}</td>
                                    <td style={{ fontsize: "small" }}>{props.content5}</td>
                                </tr>
                                <tr>
                                    <td className="font-weight-bold" style={{ fontsize: "small" }}>{props.content6}</td>
                                    <td style={{ fontsize: "small" }}>{props.content7}</td>
                                </tr>
                                <tr>
                                    <td className="font-weight-bold" style={{ fontsize: "small" }}>{props.content8}</td>
                                    <td style={{ fontsize: "small" }}>{props.content9}</td>
                                </tr>
                                <tr>
                                    <td className="font-weight-bold" style={{ fontsize: "small" }}>{props.content10}</td>
                                    <td style={{ fontsize: "small" }}>{props.content11}</td>
                                </tr>
                                <tr>
                                    <td className="font-weight-bold" style={{ fontsize: "small" }}>{props.content12}</td>
                                    <td style={{ fontsize: "small" }}>{props.content13}</td>
                                </tr>
                                <tr>
                                    <td className="font-weight-bold" style={{ fontsize: "small" }}>{props.content14}</td>
                                    <td style={{ fontsize: "small" }}>{props.content15}</td>
                                </tr>
                                <tr>
                                    <td className="font-weight-bold" style={{ fontsize: "small" }}>{props.content16}</td>
                                    <td style={{ fontsize: "small" }}>{props.content17}</td>
                                </tr>
                            </tbody>

                        </div>

                        {/* <NavLink to="" className="btn btn-primary">Know More</NavLink> */}
                    </div>
                </div>
            </div>

        </>
    )
};

export default Card;