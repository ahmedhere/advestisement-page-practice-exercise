import React, { useState } from 'react'
import data from '../../../Resources/data';
import Column from './Column';
const Advertisement = () => {

    const array = data;
    const [number, setIndex] = useState(0);

    function handleOnClick(x) {
        setIndex(x);
    }


    let value = data[number];

    return (
        <div className="container-fluid">

            {/* <div className='row mt-3 justify-content-around'>
                <div className="col-6 p-5 justify-content-center align-items-center">
                    <h1 className='text-primary'>{value.name}</h1>
                    <p>{value.description}</p>
                    <p className='blockquote-footer'>{value.artist}</p>
                </div>
                <div className="col-3 p-5">
                    <img src={value.url} alt={value.alt} className='img-fluid' />
                </div>
            </div> */}
            <div className="row m-3 p-3">
                {array.map((a, index) => {
                    return (<Column key={index} url={a.url} title={a.name} artist={a.artist} onClick={() => handleOnClick(index)} toggle="modal" target="#modalId" />);
                })}
            </div>

            <div className="modal fade" id="modalId" tabIndex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-md" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-primary text-light">
                            <h5 className="modal-title" id="modalTitleId">{value.name}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="card">
                                <img className="card-img-top" src={value.url} alt={value.alt} />
                                <div className="card-body">
                                    <h4 className="card-title">{value.description}</h4>
                                    <p className="card-text"> <span className="blockquote-footer">{value.artist}</span> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Advertisement