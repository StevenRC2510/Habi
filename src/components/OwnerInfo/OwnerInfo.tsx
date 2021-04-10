import React from 'react';

import { ApartmentOwner } from 'shared/entities';

export const OwnerInfo = ({ fullName, phone, email }: ApartmentOwner) => {
  return (
    <div>
      <p>
        <strong>Name: </strong> {fullName}
      </p>
      <p>
        <strong>Phone: </strong> {phone}
      </p>
      <p>
        <strong>Contact: </strong> {email}
      </p>
    </div>
  );
};
