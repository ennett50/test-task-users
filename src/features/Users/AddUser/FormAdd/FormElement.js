import React from "react";
import PropTypes from "prop-types";
import FormBlock from "./css";

const FormElement = (props) => {
    const {
        name,
        title,
        value,
        onChange,
        type = "text",
        error,
        options
    } = props;
    const propsElement = {
        id: name,
        name,
        onChange,
        type,
        value,
        options: options || null
    };
    if (type === "checkbox") {
        propsElement.checked = value;
    }
    return (
        <FormBlock.Item>
            <FormBlock.Label htmlFor={name}>
                {title || name[0].toUpperCase() + name.slice(1)}
            </FormBlock.Label>
            {type === "select" ? (
                <FormBlock.Select {...propsElement}>
                    {options.length && (
                        <>
                            {options.map((item, index) => (
                                <option value={index + 1} key={item}>
                                    {item}
                                </option>
                            ))}
                        </>
                    )}
                </FormBlock.Select>
            ) : (
                <FormBlock.Input {...propsElement} />
            )}
            {error && <FormBlock.Error>{error}</FormBlock.Error>}
        </FormBlock.Item>
    );
};

FormElement.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    title: PropTypes.string,
    error: PropTypes.string,
    options: PropTypes.array,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    onChange: PropTypes.func.isRequired
};

export default FormElement;
