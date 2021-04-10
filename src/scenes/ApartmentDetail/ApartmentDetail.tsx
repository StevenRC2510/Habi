import React from 'react';
import { useParams } from 'react-router';

import Carousel from 'components/Carousel';
import DetailInfo from 'components/DetailInfo';
import CommentList from 'components/CommentsList';

export const ApartmentDetail = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div id={id}>
      <DetailInfo>
        <Carousel />
      </DetailInfo>
      <CommentList />
    </div>
  );
};
