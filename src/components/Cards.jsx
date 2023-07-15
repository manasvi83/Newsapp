import React from 'react'

export default function (props) {
          
    return (
        <div>
            <div className="card">
                <img src={props.img} className="card-img-top" alt="https://in.pinterest.com/pin/31525266134521791/"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.content}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </div>
    )
}
