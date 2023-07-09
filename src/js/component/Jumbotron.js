import React from 'react'

const JumbotronStyle = {
    background: "#DCDCDC",
    textAlign: "left"
}

const Jumbotron = () => {
    return(
        
        <div className="jumbotron jumbotron-fluid rounded" style={JumbotronStyle}>
            <div className="container">
                <h1 className="display-2"><strong>Dog Breeds!</strong></h1>
                <p className="lead">Detailed profiles of more than 500 dog breeds. Includes personality, history, dog pictures, dog health info, and more. Find the dog breed that is right for you.</p>
                <a className="btn btn-primary btn-lg" href="https://dogtime.com/dog-breeds" role="button">All Dog Breeds!</a> 
                <hr className="my-4"></hr>
            </div>
        </div>

    )
}

export default Jumbotron