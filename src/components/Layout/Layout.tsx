import React, { ReactNode } from 'react';

import Header from 'shared/components/Header';
import Footer from 'shared/components/Footer';
import { WrapperLayout } from './StyledLayout';

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <WrapperLayout>
      <Header />
      <div className='content'>{children}</div>
      <Footer />
    </WrapperLayout>
  );
};
