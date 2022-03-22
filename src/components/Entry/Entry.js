import styled from 'styled-components';
import dayjs from 'dayjs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BsCheckCircleFill } from 'react-icons/bs';
import ScreenReaderOnly from '../../ScreenReaderOnly';

export default function Entry({
  text,
  author,
  createdAt,
  color,
  onDelete,
  onCheck,
  isChecked,
  _id,
}) {
  return (
    <Card color={color}>
      <CheckBox>
        <label htmlFor={'mark-done' + _id}>
          <ScreenReaderOnly>Mark as done</ScreenReaderOnly>
        </label>
        <input
          checked={isChecked}
          onChange={onCheck}
          id={'mark-done' + _id}
          type="checkbox"
        ></input>
      </CheckBox>
      <button onClick={onCheck}>
        <BsCheckCircleFill />
      </button>
      <span>{dayjs(createdAt).format('D.MM H:mm')}</span>
      <span>{text}</span>
      <span> - {author}</span>
      <button onClick={onDelete}>
        <RiDeleteBin6Line />
      </button>
    </Card>
  );
}

const Card = styled.section`
  background-color: ${props => (props.color ? props.color : '#798478')};
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  padding: 20px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
`;

const CheckBox = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
`;
