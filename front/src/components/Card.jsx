import React from 'react';
import './Card.css';

function Card({ titre, image, types }) {
    return (
        <div className="card-container flex w-1/4 mb-8 mx-auto justify-center mt-5">
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{titre}</h2>
                    <img src={image} alt={image} className="w-full mx-auto mb-4" />
                </div>
                {Array.isArray(types) ? (
                    <p className="text-gray-600 mt-2">Types : {types.join(', ')}</p>
                ) : (
                    <p className="text-gray-600 mt-2">Type : {types}</p>
                )}
            </div>
        </div>
    );
}



export default Card