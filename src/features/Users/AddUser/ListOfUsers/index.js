import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Table from "./Table";

const ListOfUsers = (props) => {
    const { users } = props;
    return (
        <>
            {Object.keys(users).length ? (
                <Table users={users} />
            ) : (
                <p>Please, create new user</p>
            )}
        </>
    );
};

ListOfUsers.propTypes = {
    users: PropTypes.shape().isRequired
};

function mapStateToProps(state) {
    const { users } = state.users;
    return {
        users
    };
}

export default connect(mapStateToProps)(ListOfUsers);
