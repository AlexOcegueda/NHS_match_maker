import React, { useState, useEffect } from 'react';
import '../css/styles.css';
import dogData from '../components/dogs.json';
import Layout from '../components/Layout.js';
import Animal from '../components/Animal.js';

const Filter = () => {
    const [imgUrls, setImgUrls] = useState([]); // collects imgs of dogs
    const [selectedFilters, setSelectedFilters] = useState({
        breed: '',
        eyeColor: '',
        playful: false,
        longHaired: false,
    });

    useEffect(() => {
        fetchDogImages();
    }, []);

    function fetchDogImages() {
        const numberOfDogs = 6;
        const apiUrl = `https://dog.ceo/api/breeds/image/random/${numberOfDogs}`;

        fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
            throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            setImgUrls(data.message);
        })
        .catch((error) => {
            console.error("Error fetching dog images:", error);
        });
    }

    function handleFilterChange(event) {
        const { name, value, type, checked } = event.target;
        
        setSelectedFilters((prevFilters) => {
            if (type === 'checkbox') {
                return { ...prevFilters, [name]: checked };
            }
                return { ...prevFilters, [name]: value };
        });
    }

    function filterDogs(dog) {
        const { breed, eyeColor, playful, longHaired } = selectedFilters;
        if (breed && dog.breed !== breed) return false;
        if (eyeColor && dog.eyeColor !== eyeColor) return false;
        if (playful && dog.playful !== playful) return false;
        if (longHaired && dog.longHaired !== longHaired) return false;
        return true;
    }

    return (
        <>
        <Layout />
        <div className="filters">
            <label>
                Breed:
                <input
                    type="text"
                    name="breed"
                    value={selectedFilters.breed}
                    onChange={handleFilterChange}
                />
            </label>
            <label>
                Eye Color:
                <select
                    name="eyeColor"
                    value={selectedFilters.eyeColor}
                    onChange={handleFilterChange}
                >
                    <option value="">Any</option>
                    <option value="brown">Brown</option>
                    <option value="blue">Blue</option>
                    {/* Add more options for different eye colors */}
                </select>
            </label>
            <label>
                Playful:
                <input
                    type="checkbox"
                    name="playful"
                    checked={selectedFilters.playful}
                    onChange={handleFilterChange}
                />
            </label>
            <label>
                Long-Haired:
                <input
                    type="checkbox"
                    name="longHaired"
                    checked={selectedFilters.longHaired}
                    onChange={handleFilterChange}
                />
            </label>
        </div>

        <div className="dog-container">
            {dogData.dogs.filter(filterDogs).map((dog, index) => (
                <Animal
                    key={index}
                    imgUrl={imgUrls[index]}
                    name={dog.name}
                    breed={dog.breed}
                    description={dog.description}
                    eyeColor={dog.eyeColor}
                    playful={dog.playful}
                    longHaired={dog.longHaired}
                />
            ))}
        </div>
        </>
    );
};

export default Filter;
