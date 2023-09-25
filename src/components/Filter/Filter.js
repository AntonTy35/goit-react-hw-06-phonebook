// import { useDispatch, useSelector } from 'react-redux';
import { FilterStyled, FilterTitle } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  // const dispatch = useDispatch();
  // const filter = useSelector(getFilter);

  return (
    <FilterStyled>
      <FilterTitle>Find contacts by name</FilterTitle>
      <input
        type="text"
        value={value}
        onChange={evt => onChange(evt.target.value)}
      ></input>
    </FilterStyled>
  );
};
