import React from "react";
import styled from "styled-components/macro";

const Component = styled.div`
  margin.top: 2rem;
`;

const Header = styled.h1`
  margin: 2rem 0 2rem 0;
`;

const Person = styled.div`
  border-radius: 0.375rem;
  background-color: white;
  padding: 1rem;
  margin: 1rem 0;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.15);
`;

const Name = styled.p`
  margin: 0;
  text-align: center;
`;

const People = ({ people }) => {
  return (
    <Component>
      <Header>Personas en el espacio</Header>
      {people.map((person) => {
        return (
          <Person key={person.name + person.craft}>
            <Name>
              <strong>{person.name}</strong> - {person.craft}
            </Name>
          </Person>
        );
      })}
    </Component>
  );
};

export default People;
