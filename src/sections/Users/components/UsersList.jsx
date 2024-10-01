import UserItem from "./UsersListItem";

export default function UserList(props) {
    console.log('userList ', props)
    const {userList} = props

    return (
        <ul>
            {userList.map((userItem, i) => (
                <UserItem userItem = {userItem} key = {i} />
            ))}
        </ul>

    );
}



