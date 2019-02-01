import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from "ui/atoms/Button";
import FormAdd from "./FormAdd";
import { createUser } from "../ac";

class AddUser extends Component {
    state = {
        hiddenForm: true
    };

    handleShowForm = () => {
        this.setState({
            hiddenForm: false
        });
    };

    render() {
        const { hiddenForm } = this.state;
        const { create, userData } = this.props;
        return (
            <>
                <Button
                    onClick={this.handleShowForm}
                    style={{
                        display: hiddenForm ? "inline-block" : "none"
                    }}>
                    Add new user
                </Button>
                <FormAdd
                    hiddenForm={hiddenForm}
                    createUser={create}
                    {...userData}
                />
            </>
        );
    }
}

AddUser.propTypes = {
    create: PropTypes.func.isRequired,
    userData: PropTypes.shape()
};

function mapDispatchToProps(dispatch) {
    return {
        create: (data) => {
            dispatch(createUser(data));
        }
    };
}

export default connect(
    null,
    mapDispatchToProps
)(AddUser);
