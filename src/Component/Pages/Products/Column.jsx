import React from 'react'

const Column = ({ onClick, toggle, target, title, artist, url }) => {
    return (

        <div className="col-2 mt-5" onClick={onClick} data-bs-toggle={toggle} data-bs-target={target}>
            <div className="card">
                <img src={url} alt={title} className="card-img-top" />
                <div className="card-body">
                    {title}
                    <span className="blockquote-footer">
                        {artist}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Column