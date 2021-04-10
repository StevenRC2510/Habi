import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WrapperApartment = styled.div`
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
  }
  .apartment-image {
    width: 100%;
    height: 100%;
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  .btn-detail {
    height: 45px;
    width: 100px;
    background-color: ${({ theme }) => theme.colors.red_orange};
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    margin-top: 10px;
  }
`;
