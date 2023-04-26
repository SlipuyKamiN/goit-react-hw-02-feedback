import styled from '@emotion/styled';

export const StatsList = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
  width: 400px;
`;

export const StatsListItem = styled.li`
  text-transform: capitalize;
  font-size: 28px;
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const StatsFeedbackCounter = styled.span`
  font-weight: 700;
  font-size: 28px;
`;
