import React from 'react';
import styled from 'styled-components';
import DocumentComponent from '../components/documentation/DocumentComponent';
import Loading from '../components/generic/Loading';
import Button from '../components/generic/Button';
import { Section } from '../utils/containers';
import Input from '../components/generic/Input';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #h2h2h2;
`;

const Title = styled.div`
  font-size: 2rem;
`;

class Documentation extends React.Component {
  render() {
    return (
      <Section>
      <Container>
        <div>
          <Title>Documentation</Title>
          <DocumentComponent
            title='Loading spinner '
            component={<Loading />}
            propDocs={[
              {
                prop: 'size',
                description: 'Changes the size of the loading spinner',
                type: 'string',
                defaultValue: 'medium',
              },
            ]}
          />
          <DocumentComponent
            title='Button'
            component={<Button type='default' value='default'>Button</Button>}
            propDocs={[
              {
                prop: 'type',
                description: 'Changes the type of button',
                type: 'string',
                defaultValue: 'default',
              },
              {
                prop: 'size',
                description: 'Changes the size of button',
                type: 'string',
                defaultValue: 'medium',
              },
              {
                prop: 'onClick',
                description: 'Binds the onClick',
                type: 'n/a',
                defaultValue: 'n/a',
              },
              {
                prop: 'onChange',
                description: 'Binds the onChange',
                type: 'Function',
                defaultValue: 'n/a',
              },
              
            ]}
            />
            <DocumentComponent
            title='Input'
            component={<Input value='mm' />}
            propDocs={[
              {
                prop: 'HTMLfor',
                description: 'Specifies which form element a label is bound to.',
                type: 'string',
                defaultValue: 'n/a',
              },
              {
                prop: 'value',
                description: 'Value of prop',
                type: 'string, number, function ',
                defaultValue: 'n/a',
              },
              {
                prop: 'type',
                description: 'Sets type of input',
                type: 'string',
                defaultValue: 'number',
              },
              {
                prop: 'max',
                description: 'Sets the max for number input',
                type: 'string or number',
                defaultValue: 'number',
              },
              {
                prop: 'min',
                description: 'Sets the min for number input',
                type: 'string or number',
                defaultValue: 'number',
              },
              {
                prop: 'name',
                description: 'Name of input',
                type: 'string',
                defaultValue: 'n/a',
              },
              {
                prop: 'onChange',
                description: 'Binds the onChange',
                type: 'Function',
                defaultValue: 'n/a',
              },
              
            ]}
          />
        </div>
        </Container>
        </Section>
    );
  }
}

export default Documentation;
