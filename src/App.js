import PropTypes from "prop-types";

function Food({name, picture, rating}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg2.mashed.com%2Fimg%2Fgallery%2F12-ways-to-use-kimchi-you-havent-thought-of-yet%2Fintro-1522948535.jpg&f=1&nofb=1',
    rating: 5
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fwww.gildedgingerbread.com%2Fwp-content%2Fuploads%2F2017%2F08%2FSamgyeopsal-1.jpg%3Fresize%3D750%252C600%26ssl%3D1&f=1&nofb=1',
    rating: 4.9
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.huffingtonpost.com%2Fasset%2F5727ef362200003600255394.jpeg%3Fcache%3DXowoERt6W4%26ops%3D1910_1000&f=1&nofb=1',
    rating: 4.8
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-680cvBgsZqc%2FWR19ICxpEpI%2FAAAAAAAAADE%2F6ao__aYt6fkH31iDhmThVgxKRUw7vleUwCLcB%2Fs1600%2F1234.jpg&f=1&nofb=1',
    rating: 4.5
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fjamieskitchen.ca%2Fwp-content%2Fuploads%2F2019%2F11%2Fkimbap-1024x964.jpeg&f=1&nofb=1',
    rating: 5
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => 
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      )}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

export default App;
