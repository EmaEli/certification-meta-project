import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonBiking } from '@fortawesome/free-solid-svg-icons';

import Button from './Button';

function SpecialCard({ image, title, price, description, onOrder }) {
  return (
    <div className='special-card'>
      <div
        className='special-card-image'
        style={{
          backgroundImage: `url(${image})`
        }}
      />

      <div className='special-card-content'>
        <div className='special-card-header'>
          <h3 className='special-card-title'>{title}</h3>
          <p className='special-card-price'>€ {price}</p>
        </div>
        <p className='special-card-description'>{description}</p>

        <Button
          label='Order a delivery'
          variant='ghost'
          rightIcon={<FontAwesomeIcon icon={faPersonBiking} />}
          className="animate-icon-button"
          onClick={() => alert('Ghost clicked!')}
        />
      </div>
    </div>
  );
}

export default SpecialCard;
