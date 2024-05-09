export type UserType = {
  id:       number;
  name:     string;
  username: string;
  email:    string;
  address:  {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     {
      lat: string;
      lng: string;
    };
  };
  phone:    string;
  website:  string;
  company:  {
    name:        string;
    catchPhrase: string;
    bs:          string;
  };
}


const UsersList = ({ users }: { users: UserType[] }) => {

  return (
    <ul className="space-y-8 max-h-[500px] overflow-auto">
      {(users).map((user) => {
        return (
          <li key={user.id}>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Address: {user.address.city} {user.address.street}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default UsersList