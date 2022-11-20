import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Card from './cardList';

const LunchSlide = () => {
  

  const settings = {
    slide: <Card />,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    centerPadding: '0px',
  };

  return (
    <Wrapper>
      <StyledSlide {...settings}>
        
        <Card id="0" />
        <Card id="1" />
        <Card id="2" />
        <Card id="3" />
        <Card id="4" />
        <Card id="5" />
      </StyledSlide>
    </Wrapper>
  );
};

export default LunchSlide;

const StyledSlide = styled(Slider)`
  position: relative;
  margin-top: 30px;
  margin-bottom: -40px;
  width: 100%;
  .slick-list {
    width: 680px;
    height: 400px;
    margin: 0 auto;
    overflow: hidden;
  }
  .slick-slider {
    display: flex;
  }
  .slick-track {
    display: flex;
  }
  .slick-dots {
    display: none !important;
  }
  .slick-arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 6px;
    transform: translate(16px, 120px);
    border-radius: 50%;
  }
  .slick-arrow::before {
    border-radius: 50%;
    color: black;
  }
  .slick-prev {
    position: absolute;
    top: -30px;
    right: 0px;
    cursor: pointer;
  }
  .slick-next {
    position: absolute;
    top: -30px;
    right: -60px;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  width: 600px;
`;
