// function UserList([list = []]) {
//   return (
//     <ul>
//       {list.map((item) => (
//         <li key={item.id} style={{ backgroundColor: item.favouriteColour }}>
//           <h2>
//             {item.firstName} {item.lastName}
//           </h2>
//           <p>{item.email}</p>
//           <img
//             src={item.profileImage}
//             alt={`${item.firstName} ${item.lastName}`}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// }

export default function UserItem({
  userItem: {
    firstName,
    lastName,
    gender,
    email,
    jobTitle,
    stret,
    city,
    latitude,
    longitude,
    favouriteColour,
    profileImage,
    id,
  },
}) {
  return (
    <li key={id} style={{ backgroundColor: favouriteColour }}>
      <article className="user">
        <h2>{firstName} {lastName}</h2>
        <p>{email}</p>
        <img src={profileImage} alt={`${firstName} ${lastName}`} />

      </article>
    </li>
  );
}
