import ReactDOM from 'react-dom';
import styled from 'styled-components';
import TimerProvider from '../../context/TimerProvider';

const ButtonBase = styled.button `
  display: flex;
  box-sizing: border-box;
  overflow: auto;
  vertical-align: middle;
  text-align: center;
  margin: auto;
  border-radius: 8px;
  width: auto;
  min-width: 40px;
  height: 40px;
  border: none;
  font-size: 16px;
  color: white;
  background-color: #4037C4;
  box-shadow: inset 2px 2px 5px #5850CE;
  cursor: pointer;
  &:hover {
    background-color: #342D9F;
    box-shadow: inset 1px 1px 5px #4037C4;
  }
  &:active {
    background-color: #342D9F;
    font-weight: 600;
    box-shadow: inset 1px 1px 5px #25253C;
  }
`;

const Container = styled.div `
    text-align: center;
    display: flex;
    padding: 0.5rem;
    margin: auto;
    align-content: center;
    overflow: auto;
    filter: drop-shadow(2px 2px 3px #333333);
    cursor: pointer;
`;

const ButtonDefault = styled(ButtonBase)`
  background: #4037C4;
`;

const ButtonSelected = styled(ButtonBase)`
  background-color: #342D9F;
  box-shadow: inset 1px 1px 5px #4037C4;
  font-weight: 600;
  filter: drop-shadow(2px 2px 3px #333333);
`;

export const ButtonStart = styled(ButtonBase)`
  background: #057C48;
  box-shadow: ${props => (props.down ? 'inset 0 0 5px black' : 'inset 2px 2px 5px #25A76F')};
  &:hover {
    background-color: #046239;
    box-shadow: ${props => (props.down ? 'inset 0 0 5px black' : 'inset 2px 2px 5px #057C48')};
  }
  &:active {
    background-color: #046239;
    box-shadow: inset 1px 1px 5px #25253C;
  }
`;

export const ButtonStop = styled(ButtonBase)`
  background: #AD0A0F;
  box-shadow: ${props => (props.down ? 'inset 0 0 5px black' : 'inset 2px 2px 5px #DD2C32')};
  &:hover {
    background-color: #87080C;
    box-shadow: ${props => (props.down ? 'inset 0 0 5px black' : 'inset 2px 2px 5px #AD0A0F')};
  }
  &:active {
    background-color: #87080C;
    box-shadow: inset 1px 1px 5px #25253C;
  }
`;

const Button = (props) => {
  const { children, type, ...buttonProps } = props;

  switch (type) {
    default:
      return (
        <ButtonDefault
          {...buttonProps}>
          <Container>
            {children}
          </Container> 
        </ButtonDefault>
      );
    case 'start':
      return (
        <ButtonStart
          {...buttonProps}>
          <Container>
            {children}
          </Container>
        </ButtonStart>
      );
    case 'stop':
      return (
        <ButtonStop
         {...buttonProps}>
            <Container>
              {children}
            </Container>
          </ButtonStop>
      );
      case 'active':
        return (
          <ButtonSelected
            {...buttonProps}>
              <Container>
                {children}
              </Container>
            </ButtonSelected>
        );
  }
};

Button.defaultProps = {
  type: "default",
  pressed: false,
};

ReactDOM.render(
  <TimerProvider>
    <Button />
  </TimerProvider>,
  document.getElementById('root')
);

export default Button;







