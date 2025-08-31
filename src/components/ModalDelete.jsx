import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useSearchParams } from "react-router-dom";

const ModalAlert = ({
  isModalOpen,
  setIsDeleteModalOpen,
  deletedUser,
  userData,
  setUserData,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const showModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleOk = () => {
    const id = searchParams.get("id");
    const updatedList = userData.filter((user) => user.id != id);
    setUserData(updatedList);
    setIsDeleteModalOpen(false);
    setSearchParams({});
  };

  const handleCancel = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      <Modal
        title="DELETE USER"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Are you Sure Delete user {deletedUser?.name}?</p>
      </Modal>
    </>
  );
};

export default ModalAlert;
