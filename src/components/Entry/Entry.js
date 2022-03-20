import styled from 'styled-components';

export default function Entry({ text, author, created, color, onClick }) {
  return (
    <Card color={color} onClick={() => onClick(text)}>
      <span>[{created}]</span>
      <span>{text}</span>
      <span> - {author}</span>
    </Card>
  );
}

const Card = styled.section`
  background-color: ${props => (props.color ? props.color : '#798478')};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  padding: 20px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
`;
