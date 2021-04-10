import styled from 'styled-components';
import { flex } from 'styles';

export const WrapperAppBar = styled.div`
  flex-grow: 1;
  .MuiAppBar-root {
    background-color: ${({ theme }) => theme.colors.white};
    .title {
      flex-grow: 1;
    }
    .logo {
      width: 70px;
      height: 50px;
      margin-left: 10px;
    }
    .user-info {
      ${flex('center', 'flex-end')};
      width: 100%;
      .user-text {
        color: ${({ theme }) => theme.colors.purple};
        margin-left: 15px;
        font-weight: bold;
      }
      svg {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.purple};
      }
      .MuiBadge-colorSecondary {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.red_orange};
      }
    }
  }
`;
