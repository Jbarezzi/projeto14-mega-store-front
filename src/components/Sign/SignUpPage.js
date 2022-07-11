import React from 'react';
import { Link, useNavigate } from "react-router-dom";

import { useState } from 'react';
import axios from 'axios';


import Container from '../shared/Container';
import styled from 'styled-components';


export default function SignUpPage() {

  const navigate = useNavigate();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function signUpForm(event) {
    event.preventDefault();

    const body = {
      name: name,
      email: email,
      cpf: cpf,
      password: password,
      confirmPassword: confirmPassword

    }

    const SIGN_UP_API = 'https://taigamegastore.herokuapp.com/sign-up';

    const promise = axios.post(SIGN_UP_API, body);
    promise
    .then((res) => {
      navigate("/login");
      console.log(res.data);
    })
    .catch(error => {
      alert('Cadastro inválido! Por favor verifique seus dados.');
    })

  }

  function formataCPF(cpfTeste) {
    cpfTeste = cpfTeste.replace(/[^\d]/g, ""); 

    return cpfTeste.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

/*   function validateCPF(number){
    return number
    .replace(/\D/g,'')
    .replace(/(\d{3})(\d)/,'$1.$2')
    .replace(/(\d{3})(\d)/,'$2.$3')
    .replace(/(\d{3})(\d)/,'$3-$4')
    .replace(/(\d{2})(\d)/g,'$1');
  } */

  return (
    <Container>
      <ContainerSignUp>
        <h1>Mega Store</h1>

        <Form onSubmit={(event) => 
        signUpForm(event)}>
          <Input
          placeholder='Nome'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete='on'
          />

          <Input
          placeholder='E-mail'
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete='on'
          />

          <Input
          placeholder='CPF'
          type='text'
          value={cpf}
          onChange={(e) => setCpf(formataCPF(e.target.value))}
          maxLength={11}
          autoComplete='on'
          />

          <Input
          placeholder='Senha'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete='on'
          />

          <Input
          placeholder='Confirme a senha'
          type='password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          autoComplete='on'
          />

        <Button type='submit'>
          Cadastrar
        </Button>
        </Form>
     
        <Link to='/sign-in'>
        <Span>Já tem uma conta? Entre agora!</Span>
        </Link>
      </ContainerSignUp>
    </Container>
  )
}

const ContainerSignUp = styled.section`
  margin: 0 auto;
  width: 326px;
  h1 {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 89px;
    color: var(--background-buttons);
  }
`
const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 24px; 
        width: 326px;
        height: 58px;
        padding: 0 0.9rem;
        background-color: var(--white);
        border: 1px solid var(--white);
        border-radius: 5px;
        
    &::placeholder {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
    }

    & + input {
        margin-top: 1rem; 
    }

`

const Button = styled.button`
    margin: 0 auto; 
    cursor: pointer;
    border: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
    margin-bottom: 1.2rem;
    width: 326px;
    height: 46px;


  /*   a { 
        text-decoration: none;
        color: var(--white);
    } */

    background: var(--background-buttons);
    border-radius: 8px;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;

    color: var(--white);
`

const Span = styled.div`
    padding-top: 10px;
    cursor: pointer;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);

    a { 
        text-decoration: none;
        //color: var(--white);
    }
`