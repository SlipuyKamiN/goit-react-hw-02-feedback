import styled from '@emotion/styled';

export const ButtonsList = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
  text-align: center;
  max-width: 100%;
  justify-content: center;
  padding: 0;
`;

export const ButtonsListItem = styled.li`
  width: 150px;
`;

export const Button = styled.button`
  width: 100%;
  border: 2px solid #fed800;
  background-color: transparent;
  border-radius: 15px;
  padding: 15px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
    color 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  text-transform: capitalize;

  &:hover,
  &:focus {
    background-color: grey;
    color: #fff;
  }
`;
