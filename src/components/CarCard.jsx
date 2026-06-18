function CarCard({ car }) {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.model} />
      <h3>{car.year} {car.make} {car.model}</h3>
      <p>Rs. {car.price.toLocaleString()}</p>
    </div>
  );
}

export default CarCard;