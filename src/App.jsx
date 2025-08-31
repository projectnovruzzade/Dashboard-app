import { useState } from "react";
import Header from "./components/Header";
import UserList from "./components/UserList";
import { userTable } from "./mock/data";
import ModalDelete from "./components/ModalDelete";
import ModalCreate from "./components/ModalCreate";
import "./index.css";
import { useSearchParams } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsDeleteModalOpen] = useState(false);
  const [openIsCreateModel, setIsCreateModalOpen] = useState(false);
  const [userData, setUserData] = useState(userTable);
  const [deletedUser, setDeletedUser] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  const deleteUser = (id) => {
    const deletedUser = userData.find((user) => user.id === id);
    setIsDeleteModalOpen(!isModalOpen);
    setDeletedUser(deletedUser);
    setSearchParams({ id });
  };

  const addUser = (user) => {
    const updatedList = [...userData, user];
    setUserData(updatedList);
  };
  return (
    <section className="container">
      <ModalDelete
        isModalOpen={isModalOpen}
        setIsDeleteModalOpen={setIsDeleteModalOpen}
        deletedUser={deletedUser}
        userData={userData}
        setUserData={setUserData}
      />
      <ModalCreate
        addUser={addUser}
        userData={userData}
        openIsCreateModel={openIsCreateModel}
        setIsCreateModalOpen={setIsCreateModalOpen}
      />
      <Header setIsCreateModalOpen={setIsCreateModalOpen} />
      <UserList deleteUser={deleteUser} userData={userData} />
    </section>
  );
}

export default App;
