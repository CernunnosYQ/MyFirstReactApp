import React, {useState, useEffect} from 'react'
import Navbar from '../modules/navbar'
import UserList from '../modules/user_list'

const API = process.env.REACT_APP_API;

const Users = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]);

  const [id, setID] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();

    let res;

    if (id) {
      res = await fetch(`${API}/users/${id}`, {
        method:'PATCH',
        headers: {
          'Content-Type': 'Application/json' 
        },
        body: JSON.stringify({
          username: name,
          password: password,
          email: email
        })
      });
    } else {
      res = await fetch(`${API}/users`, {
        method:'POST',
        headers: {
          'Content-Type': 'Application/json' 
        },
        body: JSON.stringify({
          username: name,
          password: password,
          email: email
        })
      });
    }

    const data = await res.json();
    console.log(data);
    
    await getUsers();

    setID(null)
    setName('')
    setPassword('')
    setEmail('')
  }

  const getUsers = async () => {
    const res = await fetch(`${API}/users`);
    const data = await res.json();

    setUsers(data);
  }

  const editUser = async (user_id) => {
    const res = await fetch(`${API}/users/${user_id}`);
    const data = await res.json();

    setID(data._id)
    setName(data.username)
    setEmail(data.email)
  }

  const deleteUser = async (user_id) => {
    const user_res = window.confirm('¿Estás seguro de querer eliminar el usuario?');

    if (user_res) {
      const res = await fetch(`${API}/users/${user_id}`, { method: 'DELETE' });
      const data = await res.json();

      console.log(data);
      await getUsers();
    }
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <>
      <Navbar />
      <section className="container p-2">
        <h1>Users</h1>
        <div className="row">
          <div className="col-md-4">
            <form onSubmit={handleSubmit} className="card card-body">
              <div className="form-group mt-2 mb-2">
                <input
                  type="text"
                  onChange={e => setName(e.target.value)}
                  value={name}
                  placeholder="Username"
                  className="form-control"
                  autoFocus
                />
              </div>
              <div className="form-group mt-2 mb-2">
                <input
                  type="password"
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                  className="form-control"
                />
              </div>
              <div className="form-group pt-2">
                <input
                type="email"
                onChange={e => setEmail(e.target.value)}
                value={email}
                placeholder="Email"
                className="form-control" />
              </div>
              <button className="btn btn-primary btn-block mt-4">Create</button>
            </form>
          </div>
          <div className="col-md-8">
            <UserList 
              users={users}
              edit_user={editUser}
              delete_user={deleteUser} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Users;