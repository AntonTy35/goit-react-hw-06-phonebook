import { useDispatch, useSelector } from 'react-redux';
import { FilterStyled, FilterTitle } from './Filter.styled';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <FilterStyled>
      <FilterTitle>Find contacts by name</FilterTitle>
      <input
        type="text"
        value={filter}
        onChange={event => dispatch(setFilter(event.target.value.trim()))}
      ></input>
    </FilterStyled>
  );
};
