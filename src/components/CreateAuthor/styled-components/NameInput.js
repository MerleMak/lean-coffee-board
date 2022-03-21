import styled from 'styled-components';

export default styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  label {
    color: #15616d;
    cursor: pointer;
  }
  input {
    border: solid #15616d 1px;
    border-radius: 5px;
    background-color: #ffecd1;
    padding: 7px;
    width: 100%;
    color: #001524;
    ::placeholder {
      color: #c2c5bb;
      padding: 7px;
    }
  }
`;
