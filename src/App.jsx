import cars from './components/carsData';
import CarCard from './components/CarCard';
import { useState } from 'react';
import Filter from './components/Filter';
import './app.css';

function App() {
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

  let years = [];
  let makes = [];
  let models = [];
  let prices = [];

  for (let i = 0; i < cars.length; i++) {
    if (years.indexOf(cars[i].year) === -1) {
      years.push(cars[i].year);
    }
    if (makes.indexOf(cars[i].make) === -1) {
      makes.push(cars[i].make);
    }
    if (models.indexOf(cars[i].model) === -1) {
      models.push(cars[i].model);
    }
    if (prices.indexOf(cars[i].price) === -1) {
      prices.push(cars[i].price);
    }
  }

  let filteredCars = [];

  for (let i = 0; i < cars.length; i++) {
    let car = cars[i];
    let matches = true;

    if (selectedYear !== '' && car.year !== Number(selectedYear)) {
      matches = false;
    }
    if (selectedMake !== '' && car.make !== selectedMake) {
      matches = false;
    }
    if (selectedModel !== '' && car.model !== selectedModel) {
      matches = false;
    }
    if (selectedPrice !== '' && car.price !== Number(selectedPrice)) {
      matches = false;
    }

    if (matches) {
      filteredCars.push(car);
    }
  }
  let carList = [];

  for (let i = 0; i < filteredCars.length; i++) {
    carList.push(<CarCard key={filteredCars[i].id} car={filteredCars[i]} />);
  }

  return (
    <div className="app">
      <h1>Car Listings</h1>
      <Filter
        years={years}
        makes={makes}
        models={models}
        prices={prices}
        selectedYear={selectedYear}
        selectedMake={selectedMake}
        selectedModel={selectedModel}
        selectedPrice={selectedPrice}
        setSelectedYear={setSelectedYear}
        setSelectedMake={setSelectedMake}
        setSelectedModel={setSelectedModel}
        setSelectedPrice={setSelectedPrice}
      />
      <div className="car-grid">
        {carList}
      </div>
    </div>
  );
}

export default App;