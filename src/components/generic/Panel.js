import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Container = styled.div`
  background: rgb(37,37,60);
  background: linear-gradient(90deg, rgba(37,37,60,1) 0%, rgba(47,47,55,1) 100%);
  border-radius: 16px;
  padding: 2rem 2rem 0.5rem 2rem;
  display: block;
  justify-content: space-evenly;
  overflow: auto;
  box-sizing: border-box;
  min-width: 300px;
  max-width: 500px;
  box-shadow:  1px 1px 5px #2F2F37;
  margin: auto;
`;

const Panel = (props) => {
  return <Container>{props.children}</Container>;
}

ReactDOM.render(
  <Panel />,
  document.getElementById('root')
);

export default Panel;

