import React from 'react';
import Pdata from './Pdata';
import Card from './Card';

const Products = () => {
    return (
        <>
            <div className="my-3">
                <h1 className="text-center"> Our Products </h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                Pdata.map((val, ind) => {
                                    return <Card key={ind}
                                        imgsrc={val.imgsrc}
                                        // header={val.header}
                                        title={val.title}
                                        content1={val.content1}
                                        content2={val.content2}
                                        content3={val.content3}
                                        content4={val.content4}
                                        content5={val.content5}
                                        content6={val.content6}
                                        content7={val.content7}
                                        content8={val.content8}
                                        content9={val.content9}
                                        content10={val.content10}
                                        content11={val.content11}
                                        content12={val.content12}
                                        content13={val.content13}
                                        content14={val.content14}
                                        content15={val.content15}
                                        content16={val.content16}
                                        content17={val.content17}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Products;