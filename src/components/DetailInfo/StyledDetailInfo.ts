import styled from 'styled-components';
import { flex } from 'styles';

export const WrapperApartmentDetail = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
  .carousel {
    ${flex('center', 'center')};
  }
  .info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin-top: 20px;
  }
`;
