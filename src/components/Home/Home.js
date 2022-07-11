import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { List, SignIn, User } from 'phosphor-react';
import { Link } from "react-router-dom";
//import Container from '../shared/Container';
import Header from '../shared/Header';
import styled from 'styled-components';
import ProductCard from "./ProductCard";
import { getProducts } from "./../../services/index";
//import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import { useContext } from "react";
import UserContext from "../../contexts/UserContext";


const options = ["Casa", "Escritório", "Informática", "Escolar", "Esportes", "Livros"];

export default function Home() {

  const { user } = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [orderByPromotion, setOrderByPromotion] = useState(true);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const [categories, setCategories] = useState([]);

  console.log(user.token); 
  console.log(categories);


  const toggling = () => setIsOpen(!isOpen); 

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };


  useEffect(() => {
    const API = 'https://taigamegastore.herokuapp.com/categories'

    const promise = axios.get(API,null)

    promise.then((res) => {
      setCategories(res.data);
    })

  },[user])

let filterCategories = categories.map((e) => {
  return e.name;
})
  
  useEffect(() => {
    const promise = getProducts(orderByPromotion, selectedOption);
    promise.then((res) => {
      setProducts(res.data);
    });
  },[orderByPromotion, selectedOption]);


//console.log(filterCategories);
//console.log(selectedOption);

  return (
    <>
      <Header>  
  <DropDownContainer>
          <DropDownHeader onClick={toggling}>
          <List size={32} />
            {selectedOption || "Categoria"}
          </DropDownHeader>
          {isOpen && (
            <DropDownListContainer>
              <DropDownList>
                {filterCategories.map(option => (
                  <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                    {option}
                  </ListItem>
                ))}
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
        {user === undefined ? 
        <div>
          <h1>MegaStore</h1>
          <p>Para efetuar uma compra, faça login! </p>
        </div>
        : 
        <h1>MegaStore</h1>
         }
        
          {user === undefined ? 
          <SignInContainer>
          <Link to='/sign-in'>
          <SignIn size={32}/>
          </Link>
          </SignInContainer>
          : 
          <SignInContainer>
          <Link to='/'>
          <User size={32} />
          </Link>
          </SignInContainer>
          }
      </Header>
      <ProductsContainer>
        {products ? products.map((product, index) => <ProductCard product={product} key={index} />) : ""}            
      </ProductsContainer>            
    </>
  )
}

const SignInContainer = styled.div`
a { 
        text-decoration: none;
        color: var(--background-buttons);
    }
cursor: pointer;

`

const DropDownContainer = styled.button`
  width: 12rem;
  height: 3.125rem;
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

const ProductsContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  column-gap: 6rem;
  row-gap: 3rem;
  padding: 0 15rem;
`;
