import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { flex } from 'styles';

interface LiProps {
  isActive: boolean;
}

export const WrapperPagination = styled.div`
  list-style: none;
  .pagination {
    ${flex('center', 'center')};
  }
`;

export const PageItemStyled = styled.li<LiProps>`
  ${flex('center', 'center')};
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: ${({ theme, isActive }) => (isActive ? theme.colors.purple : theme.colors.gray_4)};
  margin: 0px 5px;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;
