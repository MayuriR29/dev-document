import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import CardItem from '../../components/Card';
import SC from './style';


import mockData from '../../utils/constants/api.json';

const Landing = () => {
  const [cardData, setData] = useState([]);
  const [loading, showLoader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      showLoader(false);
    }, 1000);

  }, [])
  useEffect(() => {
    setData(mockData.data);
  }, [loading])
  return <>
    {loading ? <Spinner animation="border" size="lg" role="status" /> :
      <SC.StyledContainer fluid>
        <Row>APIs & Services</Row>

        <Row>Access information on  how to use Forge APIs and Services</Row>
        <SC.CardContainer >
          {cardData.map(eachElement => <CardItem data={eachElement} />)}
        </SC.CardContainer>
      </SC.StyledContainer>
    }

  </>
}
export default Landing;
