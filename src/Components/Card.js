import React from 'react';
import './Societies.css';

export default function Card(props) {
    return (
        <>
            <div className='societiesCard'>
                <img src={props.logo}/>
                <h1> {props.title} </h1>
                <p> {props.desc} </p>
                <a href={props.link}>
                    <h3> Read more </h3>
                </a>
            </div>
        </>
    )
}