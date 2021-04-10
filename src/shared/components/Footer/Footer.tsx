import React from 'react';

import { WrapperFooter } from './StyledFooter';

export const Footer = () => {
  return <WrapperFooter>© {new Date().getFullYear()} Created by Steven Ruiz </WrapperFooter>;
};
