import React from 'react'
import PropTypes from 'prop-types'



const Card = (props) => {
    return (
        <> 
        <div className="col col-md-3 mt-4 p-3 rounded">
            <div class="card">
                    <img src={props.image} class="card-img-top img-fluid" alt="..."></img>
                <div className="card-body p-3">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
                <div className="card-footer">
                    <a className="btn btn-primary btn-lg" href={props.url} role="button">Find out more!</a>
                </div>
            </div>     
        </div>
        </>
    )
}

Card.propTypes = {
    title: PropTypes.title,
    image: PropTypes.image,
    description: PropTypes.description,
    url: PropTypes.url
}

export default Card