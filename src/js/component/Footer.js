import React from 'react'

const footerStyle = {
    background: "black",
    fontSize: "21px"
}

const Footer = () => {
    return(
        
        <div>
            <div className="container-fluid" style={footerStyle}> 
                <footer className="flex-wrap align-items-center py-3 border-top">
                    <div className="col-md-12 align-items-center">
                        <span className="mb-3 mb-md-0 text-white">Copyright © My Website 2023 KMR</span>
                    </div>
                </footer>
            </div>
        </div>

    )
}

export default Footer