import styled from 'styled-components';

export const WrapperFilters = styled.div`
  margin-top: 20px;
  padding: 20px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  .btn-search {
    height: 45px;
    background-color: ${({ theme }) => theme.colors.red_orange};
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
  }
  .wrapper-fields {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
  }
`;
