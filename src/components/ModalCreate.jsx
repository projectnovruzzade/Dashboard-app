import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Input } from "antd";

const ModalCreate = ({
  addUser,
  userData,
  openIsCreateModel,
  setIsCreateModalOpen,
}) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userStatus, setUserStatus] = useState("");

  const handleOk = () => {
    const newUser = {
      id: userData.length + 1,
      name: userName,
      date: new Date().toISOString().split("T")[0],
      role: userRole.toLocaleLowerCase(),
      status: userStatus.toLocaleLowerCase(),
    };

    addUser(newUser);
    setUserName("");
    setUserRole("");
    setUserStatus("");
    setIsCreateModalOpen(false);
  };

  const handleCancel = () => {
    setIsCreateModalOpen(false);
  };

  return (
    <>
      <Modal
        title="Add New User"
        open={openIsCreateModel}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <form action="">
          <label htmlFor="" className="block mb-4">
            <span className="mb-1 block text-shadow-amber-300">Name</span>
            <Input
              placeholder="Set Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
          <label htmlFor="" className="block mb-4">
            <span className="mb-1 block text-shadow-amber-300">Role</span>
            <Input
              placeholder="Set Role"
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
            />
          </label>
          <label htmlFor="" className="block mb-4">
            <span className="mb-1 block text-shadow-amber-300">Status</span>
            <Input
              placeholder="Set Status"
              value={userStatus}
              onChange={(e) => setUserStatus(e.target.value)}
            />
          </label>
        </form>
      </Modal>
    </>
  );
};

export default ModalCreate;
