import React from 'react'

export default function About(props) {
 
    let myStyle = {
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white', 
    }
    
    return (
        <div className="container">
            <h1 className="my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze Your text </strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    Phasellus consectetur urna cubilia dolor. Porttitor dui, faucibus ac praesent libero sapien etiam et cursus tellus dolor? Aliquet bibendum condimentum vulputate. Donec dolor quam egestas odio dapibus varius id rhoncus vel cursus mauris semper?
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use </strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    Phasellus consectetur urna cubilia dolor. Porttitor dui, faucibus ac praesent libero sapien etiam et cursus tellus dolor? Aliquet bibendum condimentum vulputate. Donec dolor quam egestas odio dapibus varius id rhoncus vel cursus mauris semper?
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible </strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    Phasellus consectetur urna cubilia dolor. Porttitor dui, faucibus ac praesent libero sapien etiam et cursus tellus dolor? Aliquet bibendum condimentum vulputate. Donec dolor quam egestas odio dapibus varius id rhoncus vel cursus mauris semper?
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
