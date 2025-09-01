import { useState } from "react";
import Header from "./components/Header";
import UserList from "./components/UserList";
import { userTable } from "./mock/data";
import ModalDelete from "./components/ModalDelete";
import ModalCreate from "./components/ModalCreate";
import "./index.css";
import { useSearchParams } from "react-router-dom";
import ModalUpdate from "./components/ModalUpdate";

function App() {
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsDeleteModalOpen] = useState(false);
  const [openIsCreateModel, setIsCreateModalOpen] = useState(false);
  const [openIsUpdateModal, setOpenIsUpdateModal] = useState(false);
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

  const updateUser = (id) => {
    const findUser = userData.find((user) => user.id === id);
    setSearchParams({ id });
    setOpenIsUpdateModal(true);
    console.log(findUser);
  }
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
      <ModalUpdate
        openIsUpdateModal={openIsUpdateModal}
        setOpenIsUpdateModal={setOpenIsUpdateModal}
        userData={userData}
        setUserData={setUserData}
      />
      <Header setIsCreateModalOpen={setIsCreateModalOpen} />
      <UserList deleteUser={deleteUser} userData={userData} updateUser={updateUser} />
    </section>
  );
}

export default App;
