import { useState } from "react";

function AdviceSection() {
  const [favouriteAdvice, setFavAdv] = useState([]);
  const [data, setData] = useState(null);

  const fetchData = () => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => setData(data.slip))
      .catch(error => console.error('Error fetching data:', error));
  };

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="advice-slip">
        {data ? (
          <div>{data.id}, {data.advice}</div>
        ) : (
          <div>Loading...</div>
        )}
      </section>
      <h2>Favourite Advice</h2>
      <section className="favourite-slips-list">
        {favouriteAdvice.map((advice, index) => (
          <div key={index}>{advice.id}, {advice.advice}</div>
        ))}
      </section>
      <button onClick={fetchData}>Get Advice</button>
      <button onClick={() => setFavAdv([...favouriteAdvice, data])}>Save to Favourites</button>
    </section>
  );
}

export default AdviceSection;
