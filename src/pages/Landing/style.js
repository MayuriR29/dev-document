import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import breakpoint from '../../constants/breakpoints';
export default {
  StyledContainer: styled(Container)`background-color:#D7DBDD;
  color:#4D5656;
  height:100%;
  width:100%;
  @media only screen and ${breakpoint.device.sm}{
    padding: 0px 30px;
}
@media only screen and ${breakpoint.device.md}{
  padding: 0px 100px;
}
@media only screen and ${breakpoint.device.lg}{
  padding: 0px 150px;
}`,
  CardContainer: styled.div`display:flex;
  flex-direction: row;
  flex-wrap:wrap`
}