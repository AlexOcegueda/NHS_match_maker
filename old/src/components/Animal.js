import React from 'react';
import '../css/animal.css';

const Animal = ({ imgUrl, name, breed, description, eyeColor, playful, longHaired }) => {
    return (
        <div className="animal-container">
            <div className="animal-text">
                <h2>{name}</h2>
                <p className="animal-description">
                    <strong>Breed:</strong> {breed}
                    <br />
                    <strong>Eye Color:</strong> {eyeColor}
                    <br />
                    <strong>Playful:</strong> {playful ? 'Yes' : 'No'}
                    <br />
                    <strong>Long-Haired:</strong> {longHaired ? 'Yes' : 'No'}
                    <br />
                    {description}
                </p>
            </div>
            <img className="animal-image" src={imgUrl} alt="Animal Image" />
        </div>
    );
};

export default Animal;
