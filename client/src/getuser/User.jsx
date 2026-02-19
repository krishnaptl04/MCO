import react from "react";
import "./User.css";

const User = () => {
  return (
    <div className="userTable">
      <button type="button" class="btn btn-primary">
        Add User
      </button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">S.NO</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Joun</td>
            <td>joun@gmail.com</td>
            <td>Canada</td>
            <td>Update | Delete</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User;
