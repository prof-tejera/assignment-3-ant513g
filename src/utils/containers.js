import styled from 'styled-components';
import Colors from '../theme/Colors';

export const Panel = styled.div`
  box-sizing: border-box;
  background: ${Colors.surfaceDark};
  background: linear-gradient(90deg, rgba(37,37,60,1) 0%, rgba(47,47,55,1) 100%);
  border-radius: 16px;
  padding: 2rem;
  display: block;
  overflow: auto;
  box-shadow:  1px 1px 5px #2F2F37;
  margin: auto;
  width: 60%;
`;

export const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-evenly;
  vertical-align: center;
  margin: 0.5rem;
  flex-wrap: wrap;
`;

export const FlexBetween = styled(Container)`
  justify-content: space-between;
  min-width: 80px;
 
  & > span::after {
    content: '|';
    color: ${Colors.black};
    margin: 10px;
  }
  & > span:last-child::after {
    content: '';
  }
`;

export const FlexCenter = styled(Container)`
  justify-content: center;
`;

export const Display = styled.section`
  box-sizing: border-box;
  border: none;
  height: max-content;
  margin: auto;
  overflow: auto;
  width: 100%;
  text-align: center;
  background-color: #484661;
  border-radius: 8px;
  color: white;
  box-shadow: inset 0 0 10px #1C1C21;
  font-family: 'Inconsolata', monospace;
`;

export const Column = styled.span`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const Section = styled.section`
  margin: 2.5rem;
`;

export const LargeText = styled.div`
  font-size: 48px;
  font-weight: 400;
  margin: auto 1rem;
`;

export const Label = styled.div`
  display: block;
  font-size: 16px;
  text-align: center;
  vertical-align: middle;
  font-family: 'Inconsolata', monospace;
  margin: 0;
`;

export const LargeLabel = styled(Label)`
  font-size: 20px;
  width: auto;
  font-family: 'Inconsolata', monospace;
`;

export const Rounds = styled.div`
  font-family: 'Inconsolata', monospace;
  box-sizing: border-box;
  overflow: auto;
  font-size: 24px;
  font-weight: 400;
  vertical-align: middle;
  display: block;
  text-align: center;
  margin: 4px auto;
`;

export const Li = styled.li`
  font-size: 18px;
  font-family: 'Inconsolata', monospace;
  color: white;
  display: flex;
  justify-content: space-between;
  margin: 1rem auto;
`;

export const ListUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: scroll;
  padding: 1rem 0 0 0;
  max-height: 200px;
`;

export const HR = styled.hr`
  border: 0;
  height: 1px;
  background: ${Colors.surfaceDark};
  background-image: linear-gradient(to right, #342D9F, #4037C4, #342D9F);
`;

export const Border = styled.div`
  background: ${Colors.oceanblue500};
  border-radius: 16px;
  padding: 1.5rem;
`;

export const QueueSurface = styled.div`
  // background: ${Colors.oceanblue700};
  // background: #3E3B54;
  border-radius: 16px;
  padding: 1.5rem;
  min-width: 500px;
  max-width: 700px;
  margin: 0 auto 10rem auto;
  text-align: center;
  `;

export const QueueCard = styled.div`
  background: ${Colors.oceanblue700};
  align-content: center;
  justify-content: center;
  margin: 16px;
  font-size: 20px;
  border-radius: 16px;
  position: relative;
  height: 100px;
  display: flex;
  padding: 20px;
  `;

export const NavWrapper = styled.div`
  margin: auto;
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  right: 0;
`;

export default Display;