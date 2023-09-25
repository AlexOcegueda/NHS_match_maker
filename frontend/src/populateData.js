import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { firebaseConfig } from './firebase.js';

const firebaseApp = initializeApp(firebaseConfig);

const database = getDatabase(firebaseApp);

const dogs = [
  {
    name: 'Buddy',
    breed: 'Labrador Retriever',
    age: 3,
  },
  {
    name: 'Max',
    breed: 'German Shepherd',
    age: 2,
  },
  {
    name: 'Charlie',
    breed: 'Golden Retriever',
    age: 4,
  },
  
];

// Function to populate the database with dogs
const populateDatabaseWithDogs = () => {
  dogs.forEach((dog, index) => {
    // Generate a unique key for each dog
    const dogRef = ref(database, 'dogs/' + index);

    // Set the dog data in the database
    set(dogRef, dog)
      .then(() => {
        console.log(`Dog ${index + 1} added successfully!`);
      })
      .catch((error) => {
        console.error(`Error adding dog ${index + 1}: ${error.message}`);
      });
  });
};

// Call the function to populate the database with dogs
populateDatabaseWithDogs();
