
import React from 'react';

import SC from './style';
const CardItem = ({ data }) => (
  <div>
    <SC.StyledCard>
      <SC.StyledCard.Body>
        <SC.StyledCard.Title>{data.title}</SC.StyledCard.Title>
        <SC.StyledCard.Text>{data.text}</SC.StyledCard.Text>

      </SC.StyledCard.Body>
    </SC.StyledCard>
  </div>
);

export default CardItem;