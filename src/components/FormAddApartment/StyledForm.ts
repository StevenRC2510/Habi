import styled from 'styled-components';
import { flex } from 'styles';

export const WrapperForm = styled.div`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  margin-top: 40px;
  .wrapper-fields {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }
  .wrapper-btn-delete {
    ${flex('center', 'flex-end')};
    width: 100%;
    margin: 20px 0px;
    .btn-delete {
      background-color: ${({ theme }) => theme.colors.red_orange};
      color: ${({ theme }) => theme.colors.white};
      font-weight: bold;
    }
  }
  .btn-add {
    background-color: ${({ theme }) => theme.colors.red_orange};
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
  }
  .btn-add-list {
    background-color: ${({ theme }) => theme.colors.red_orange};
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    margin-top: 20px;
  }
`;
