import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/accountSlice';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
};
