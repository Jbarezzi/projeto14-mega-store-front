import React from 'react';

import { useState, useEffect } from 'react';
import { List, SignIn } from 'phosphor-react';
import { Link } from "react-router-dom";
//import Container from '../shared/Container';
import Header from '../shared/Header';
import styled from 'styled-components';

//import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = ["Mangoes", "Apples", "Oranges"];


export default function Home() {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);


  const toggling = () => setIsOpen(!isOpen); 

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

/*   const options = [
    'one', 'two', 'three'
  ];
  const defaultOption = options[0];
   */
  return (
    <>
    <Header>
   {/*    <Menu>


        <ButtonMenu>

         <Dropdown options={options}
         //onChange={this._onSelect}
          //value={defaultOption}
           placeholder= {<PencilLine />} />;  
        </ButtonMenu>
      </Menu> */}

      
<DropDownContainer>
        <DropDownHeader onClick={toggling}>
        <List size={32} />
          {selectedOption || "Categoria"}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
   
      <h1>MegaStore</h1>
      <SignInContainer>
      <Link to='/sign-n'>
      <SignIn size={32}/>
      </Link>
      </SignInContainer>
    </Header>

    {/*   <Container>

        <H1>Listagem de Produtos</H1>

      </Container> */}
    </>
  )
}

const SignInContainer = styled.div`
a { 
        text-decoration: none;
        color: var(--background-buttons);
    }
cursor: pointer;
//width: 12rem;
//height: 3.125rem;
//color: var(--background-buttons);

`

const DropDownContainer = styled.button`
  width: 12rem;
  height: 3.125rem;
  //margin: 0 auto;
  cursor: pointer;
  background: transparent;
  border: 1px solid var(--background-buttons-light);
  border-radius: 8px;
  transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }
`

const DropDownHeader = styled.div`
  margin-bottom: 0.8em;
  padding: 0.4em 1em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 700;
  font-family: 'Raleway', sans-serif;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--background-buttons-light);
  background: transparent;
`

const DropDownListContainer  = styled.div`
`

const DropDownList  = styled.ul`
  padding: 0;
  margin: 0;
  //padding-left: 1em;
  font-family: 'Raleway', sans-serif;
  background: var(--background-buttons-light);
  border: 2px solid var(--background-buttons-light);
  border-radius: 8px;
  box-sizing: border-box;
  color: var(--white);
  font-size: 0.9rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`

const ListItem   = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
`


