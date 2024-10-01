import { useEffect, useState } from "react"

function ArtsSection() {
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <FetchData />
      </div>
    </section>
  )
}

export default ArtsSection


const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/art')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.artist}</p>
            <img src={'https://boolean-uk-api-server.fly.dev' + item.imageURL} alt={item.title} />
            <p>{item.publicationHistory}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};


