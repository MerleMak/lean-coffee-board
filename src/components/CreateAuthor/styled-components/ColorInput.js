import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  label {
    color: #eff6e0;
    cursor: pointer;
  }
  input[type='color'] {
    border: solid #15616d 1px;
    border-radius: 5px;
    background-color: #eff6e0;
    height: 35px;
    width: 50px;
    padding: 3px;
  }
`;
