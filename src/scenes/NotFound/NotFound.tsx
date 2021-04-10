import React from 'react';
import { useLocation } from 'react-router';

import { Grid } from '@material-ui/core';

import styled from 'styled-components';

export const StyledGrid = styled(Grid)`
  margin-top: 20px;
  > img {
    border-radius: 8px;
  }
  p,
  h1 {
    text-align: center;
  }
`;

export const NotFound = () => {
  const location = useLocation();
  return (
    <StyledGrid container justify='center' alignItems='center'>
      <img className='apartment-image' src='https://habi.co/habi-logo-1200x630.png' alt='apartment-1' />
      <div>
        <h1>Not Found</h1>
        <h1> Ooops! page not found, try again </h1>
        <h1> We are working for you,visit us soon... 🙈 </h1>
        <p>
          No match for <code>{location.pathname}</code>
        </p>
      </div>
    </StyledGrid>
  );
};
