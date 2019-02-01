import React from "react";
import CommonTemplate from "ui/templates/common";
import AddUser from "./AddUser";
import ListOfUsers from "./AddUser/ListOfUsers";

export const UsersPage = () => {
    return (
        <CommonTemplate>
            <h1>Users</h1>
            <AddUser />
            <ListOfUsers />
        </CommonTemplate>
    );
};
