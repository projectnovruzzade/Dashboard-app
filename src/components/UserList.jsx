import React from "react";
// import { userData } from "../mock/data";
import "../index.css";
import Thead from "./Thead";
import User from "./User";

const UserList = ({deleteUser,userData,updateUser}) => {

  return (
    <main className="user-list">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <Thead />
                <tbody className="bg-white divide-y divide-gray-200">
                  {userData.map((user) => (
                   <User user={user} deleteUser={deleteUser} updateUser={updateUser} key={user.id} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {userData.length === 0 && (
          <div className="text-center py-8 text-gray-500">No data found</div>
        )}
      </div>
    </main>
  );
};

export default UserList;
