import React from "react";
import { Button, Flex } from "antd";
import { FileAddOutlined, UserAddOutlined } from '@ant-design/icons';

const Header = ({setIsCreateModalOpen}) => {

  const handleAddUser = () => {
    setIsCreateModalOpen(true);
  }
  return (
    <header>
      <div className="logo_part">
        <h1>Dashboard</h1>
      </div>
      <div className="button-group">
        <Flex gap={10} wrap>
          <Button className="export-excel" type="primary"><FileAddOutlined />Export to excel</Button>
          <Button onClick={handleAddUser} className="add-user" type="primary"><UserAddOutlined />Add user</Button>
        </Flex>
      </div>
    </header>
  );
};

export default Header;
