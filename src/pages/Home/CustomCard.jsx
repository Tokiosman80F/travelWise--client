import "./Card.css";

const CustomCard = ({ data, onClick }) => {
  const { destination, image } = data;

  const cardStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className='card' style={cardStyle} onClick={() => onClick(data)}>
      <div className='card-content'>
        <h2>{destination}</h2>
      </div>
    </div>
  );
};

export default CustomCard;
