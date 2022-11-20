import React from 'react';
import styled from 'styled-components';
import Data from './sampleData'


const Card = ((props) => {
  return(
    <>
    <li className='cards__item'>
      <Link className='cards__item__link' to={props.path}>
        <figure className='cards__item__pic-wrap' data-category={props.category}>
          <img
            className='cards__item__img'
            alt='NoImage'
            src={props.image}
          />
        </figure>
        <div className='cards__item__info'>
          <h5 className='cards__item__text'>{props.text}</h5>
        </div>
      </Link>
    </li>
  </>
  )});