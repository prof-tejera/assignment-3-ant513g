import React from "react";
import styled from "styled-components";

import DocumentComponent from "../components/documentation/DocumentComponent";

import Loading from "../components/generic/Loading";
import Button from "../components/generic/Button";
import Input from "../components/generic/Input";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #h2h2h2;
`;

const Background = styled.div`
 color: black;
 background-color: #6760d2;
`;

const Title = styled.div`
  font-size: 2rem;
`;

class Documentation extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <Title>Documentation</Title>
          <DocumentComponent
            title="Loading spinner "
            component={<Loading />}
            propDocs={[
              {
                prop: "size",
                description: "Changes the size of the loading spinner",
                type: "string",
                defaultValue: "medium",
              },
            ]}
          />
          <DocumentComponent
            title="Button"
            component={<Button type='default' value='default'>Button</Button>}
            propDocs={[
              {
                prop: "type",
                description: "Changes the type of button",
                type: "string",
                defaultValue: "default",
              },
              {
                prop: "onClick",
                description: "Binds the onClick",
                type: "N/A",
                defaultValue: "N/A",
              },
              {
                prop: "onChange",
                description: "Binds the onChange",
                type: "Function",
                defaultValue: "n/a",
              },
              
            ]}
          />
          <DocumentComponent
            title="Input"
            component={<Input />}
            propDocs={[
              {
                prop: "name",
                description: "Assigns a name",
                type: "string, number, or node",
                defaultValue: "n/a",
              },
              {
                prop: "onChange",
                description: "Binds the onChange",
                type: "Function",
                defaultValue: "n/a",
              },
              
            ]}
          />
          <Background>
         </Background>
        </div>
      </Container>
    );
  }
}

export default Documentation;
