import styled from "styled-components";

const FormBlock = styled.form`
    max-width: 560px;
    margin-bottom: 40px;
    display: ${(props) => (props.hiddenForm ? "none" : "block")};
`;
FormBlock.Item = styled.div`
    margin-bottom: 20px;
`;
FormBlock.Label = styled.label`
    margin-bottom: 10px;
    display: block;
    font-weight: bold;
`;

FormBlock.Input = styled.input`
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #c1c1c1;
    &[type="checkbox"] {
        width: auto;
    }
`;

FormBlock.Select = styled.select`
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #c1c1c1;
    background: #fff;
`;

FormBlock.Error = styled.div`
    color: #f03672;
    margin-top: 10px;
`;

export default FormBlock;
