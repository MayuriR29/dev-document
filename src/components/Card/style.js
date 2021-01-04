import styled from 'styled-components'
import {
  Card

} from 'react-bootstrap';
export default {
  StyledCard: styled(Card)`
  padding:16px 16px 0;
  width: 350px;
  height:350px;
  flex-basis: 33.3333%;
  margin-right: 15px;
  margin-top:15px;
  &:hover {
    filter:drop-shadow(16px 16px 10px grey)
  }
  `

}