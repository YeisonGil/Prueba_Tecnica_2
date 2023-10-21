import { useEffect } from "react";
import "../../assets/css/createUser.css"
import { useUsers } from '../../context/userContext';
import { useForm } from 'react-hook-form'
export const CreateUser = () => {

  const { getUsers, addUsers, users } = useUsers();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    getUsers();
  }, [])

  const onSubmit = handleSubmit((data) => {
    addUsers(data);
  })

  return (
    <div className="general__User">
      <div className="create__user">
        <form className="items" onSubmit={onSubmit}>
          <h2 className="items__h2">Crea Tu Usuario</h2>
          <input className="items__input" type="text" name="" id="" {...register("name")} />
          <button className="items__button">Crear</button>
        </form>
      </div>

      <div className="users_name"  >
        {users.map((user) => (
          <div className="users" key={user._id}>
            <span>{user.name}</span>
          </div>
        ))
        }
      </div>



    </div>
  )
}
