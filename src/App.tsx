import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { StyledCard } from './components/card.styled';
import { StyledImageCard } from './components/image.styled';
import image from './components/0cbd17e4381497547009ce81acc4eee3.jpeg'
import { TitleCard } from './components/title.styled';
import { SubtitleCard } from './components/subtitle.styled';
import { CardButton } from './components/CardButton.styled';

function App() {
  return (
    <div className="App">
      <StyledCard color={"#FFFFFF"} width='300px' height='350px' borderRadius='15px'boxShadow='0px 4px 20px 5px #00000010'>
        <StyledImageCard src={image} width='280px' height='170px' borderRadius='10px'/>
        <TitleCard fontSize='20px' fontWeight='700'>Headline</TitleCard>
        <SubtitleCard fontWeight='500' fontSize='12px' color='#ABB3BA' lineHeight='20px'>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</SubtitleCard>
        <CardButtons>
          <CardButton btnType='primary'>See more</CardButton>
          <CardButton btnType='secondary'>Save</CardButton>
        </CardButtons>   
      </StyledCard>
    </div>
  );
}

export default App;

const CardButtons = styled.div`
    display: flex;
    justify-content: flex-start;
`


