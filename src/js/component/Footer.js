import React from 'react'

const footerStyle = {
    background: "black",
    fontSize: "20px"
}

const Footer = () => {
    return(
        
        <div>
            <div className="container" style={footerStyle}> 
                <footer className="flex-wrap align-items-center py-3 my-4 border-top">
                    <div className="col-md-12 align-items-center">
                        <span className="mb-3 mb-md-0 text-white">Copyright © My Website 2023 KMR</span>
                    </div>
                </footer>
            </div>
        </div>

    )
}

export default Footer