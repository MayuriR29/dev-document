import React from 'react';
import Row from 'react-bootstrap/Row';
import CardItem from '../../components/Card'
import SC from './style';
import info from '../../constants/api.json'
const Landing = () => {
  return <SC.StyledContainer fluid>
    <Row>APIs & Services</Row>

    <Row>Access information on  how to use Forge APIs and Services</Row>
    <SC.CardContainer >
      {info.data.map(eachElement => <CardItem data={eachElement} />)}
    </SC.CardContainer>


  </SC.StyledContainer>
}
export default Landing;
