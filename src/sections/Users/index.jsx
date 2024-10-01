import { useEffect, useState } from "react";


function UsersSection() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/MalteStengard/contact')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  console.log(data)

  return (
    <section>
      <h2>Advice Section</h2>
      <ul>
        {data.map(item => (
          <li key={item.id} style={{ backgroundColor: item.favouriteColour }}>
            <h2>{item.firstName} {item.lastName}</h2>
            <p>{item.email}</p>
            <img src={item.profileImage} alt={`${item.firstName} ${item.lastName}`} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default UsersSection
