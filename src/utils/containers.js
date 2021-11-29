import styled from "styled-components";


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
  background-color: #4A4A55;
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
  margin: 2.5rem 1rem;
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
`;


export const ListUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;


export const HR = styled.hr`
  border: 0;
  height: 1px;
  background: #25253C;
  background-image: linear-gradient(to right, #342D9F, #4037C4, #342D9F);
`;

export const Border = styled.div`
  background: #342D9F;
  border-radius: 16px;
  padding: 1.5rem;
`;


export default Display;