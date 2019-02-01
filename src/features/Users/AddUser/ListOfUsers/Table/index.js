import React from "react";
import PropTypes from "prop-types";
import TableBlock from "./css";

const roleOptions = [
    "Team Lead",
    "Back-end Developer",
    "Front-end Developer",
    "DB Developer"
];

const Table = (props) => {
    const { users } = props;
    return (
        <TableBlock>
            <thead>
                <tr>
                    <th>Full name</th>
                    <th>Login</th>
                    <th>Role</th>
                    <th>Age</th>
                    <th>Registration date</th>
                    <th>Active</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(users).map((item, i) => {
                    const user = users[item];
                    return (
                        <tr key={user.id}>
                            <td>
                                {user.lastName}, {user.firstName}
                            </td>
                            <td>{user.login}</td>
                            <td>{roleOptions[+user.role - 1]}</td>
                            <td>{user.age}</td>
                            <td>
                                {new Date(+user.registrationDate)
                                    .toISOString()
                                    .slice(0, 10)}
                            </td>
                            <td>{user.isActive === "true" ? "Yes" : "No"}</td>
                        </tr>
                    );
                })}
            </tbody>
        </TableBlock>
    );
};

Table.propTypes = {
    users: PropTypes.shape().isRequired
};

export default Table;
