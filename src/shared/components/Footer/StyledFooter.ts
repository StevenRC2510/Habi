import styled from 'styled-components';

import { flex } from 'styles';

export const WrapperFooter = styled.footer`
  ${flex('center', 'center')};
  background-color: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  font-weight: bold;
`;
