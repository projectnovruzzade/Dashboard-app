import React, { useEffect, useState } from "react";
import { Button, Modal, Input } from "antd";
import { useSearchParams } from "react-router-dom";

const ModalUpdate = ({
  openIsUpdateModal,
  setOpenIsUpdateModal,
  userData,
  setUserData,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const userId = searchParams.get("id");
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userStatus, setUserStatus] = useState("");

  const handleOk = () => {
    setOpenIsUpdateModal(false);
    setUserData((prevData) =>
      prevData.map((user) => user.id === parseInt(userId) ? { ...user, name: userName, role: userRole, status: userStatus } : user)
    );
    setSearchParams({});
  };
  const handleCancel = () => {
    setOpenIsUpdateModal(false);
  };


  useEffect(() => {
    const findUser = userData.find((user) => user.id === parseInt(userId));
    setUserName(findUser?.name || "");
    setUserRole(findUser?.role || "");
    setUserStatus(findUser?.status || "");
  }, []);

  return (
    <>
      <Modal
        title="Update User"
        closable={{ "aria-label": "Custom Close Button" }}
        open={openIsUpdateModal}
        onOk={handleOk}
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

export default ModalUpdate;
