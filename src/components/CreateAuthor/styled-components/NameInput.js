import styled from 'styled-components';

export default styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  label {
    color: #eff6e0;
    cursor: pointer;
  }
  input {
    border: solid #aec3b0 1px;
    border-radius: 5px;
    background-color: #eff6e0;
    padding: 7px;
    width: 100%;
    color: #001524;
    ::placeholder {
      font-family: Abril Fatface;
      color: #c2c5bb;
      padding: 7px;
    }
  }
`;
