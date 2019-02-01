import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "ui/atoms/Button";
import FormBlock from "./css";
import FormElement from "./FormElement";
import Validation from "./validation";

const checkForm = new Validation();

class FormAdd extends Component {
    state = {
        fields: {
            login: "",
            password: "",
            firstName: "",
            lastName: "",
            age: "",
            role: "",
            isActive: false
        },
        errors: {
            login: "",
            password: "",
            firstName: "",
            lastName: "",
            age: "",
            role: "",
            isActive: ""
        },
        loading: false
    };

    handleOnChange = (e) => {
        const { name, value, type } = e.target;
        const { fields } = this.state;
        this.setState(
            (prevState) => ({
                errors: {
                    ...prevState.errors,
                    [name]: ""
                },
                fields: {
                    ...prevState.fields,
                    [name]: type === "checkbox" ? !fields.isActive : value
                }
            }),
            () => {
                const error = checkForm.checkField(name, value);
                if (error) {
                    this.setState((prevState) => ({
                        errors: {
                            ...prevState.errors,
                            [name]: error
                        }
                    }));
                }
            }
        );
    };

    handleOnSubmit = (e) => {
        e.preventDefault();
        const { createUser } = this.props;
        const { fields } = this.state;
        const data = new FormData(e.target);
        data.append("registrationDate", +new Date());
        data.append("isActive", fields.isActive);

        this.setState({
            loading: true
        });
        const validateForm = checkForm.checkDataForm(data.entries());
        if (!validateForm.isValid) {
            for (const item of validateForm.errorFields) {
                this.setState((prevState) => ({
                    loading: false,
                    errors: {
                        ...prevState.errors,
                        [item.name]: item.error
                    }
                }));
            }
        } else {
            // only for example
            const tempData = {};
            for (const item of data.entries()) {
                tempData[item[0]] = item[1];
            }
            createUser(tempData);

            for (const field in fields) {
                this.setState((prevState) => ({
                    loading: false,
                    fields: {
                        ...prevState.fields,
                        [field]: field === "isActive" ? false : ""
                    },
                    errors: {
                        ...prevState.errors,
                        [field]: ""
                    }
                }));
            }
        }
    };

    render() {
        const { fields, errors, loading } = this.state;
        const fieldsForm = [];
        const roleOptions = [
            "Team Lead",
            "Back-end Developer",
            "Front-end Developer",
            "DB Developer"
        ];
        for (const item in fields) {
            if (Object.prototype.hasOwnProperty.call(fields, item)) {
                const field = {
                    name: item,
                    value: fields[item],
                    error: errors[item]
                };
                if (item === "password") {
                    field.type = "password";
                }
                if (item === "role") {
                    field.type = "select";
                    field.options = roleOptions;
                }
                if (item === "age") {
                    field.type = "number";
                }
                if (item === "isActive") {
                    field.type = "checkbox";
                }
                fieldsForm.push(field);
            }
        }
        const { hiddenForm } = this.props;
        return (
            <FormBlock
                hiddenForm={hiddenForm}
                name="createUser"
                onSubmit={this.handleOnSubmit}>
                <h2>Create New User</h2>
                {fieldsForm.map((item) => (
                    <FormElement
                        key={item.name}
                        {...item}
                        onChange={this.handleOnChange}
                    />
                ))}
                <Button type="submit" loading={loading} disabled={!!loading}>
                    Create {loading.toString()}
                </Button>
            </FormBlock>
        );
    }
}

FormAdd.propTypes = {
    hiddenForm: PropTypes.bool,
    createUser: PropTypes.func.isRequired
};

export default FormAdd;
