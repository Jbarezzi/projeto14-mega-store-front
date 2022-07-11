import React from 'react';
import Modal from 'react-modal';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';

import Container from '../shared/Container';

import { useContext } from "react";
import UserContext from '../../contexts/UserContext';
import { useState } from 'react';

//Modal.setAppElement('.root');

export default function CheckoutPage() {

  //const {proId} = useParams();
  const navigate = useNavigate();
  //const { token, setProduct} = useContext(UserContext);

  const [productSelect, setProductSelect] = useState([]);

  const [valueProduct, setValueProduct] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardDigits, setCardDigits] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [validity, setValidity] = useState('');
  const [valueQuota, setValueQuota] = useState('');
  const [nameProduct, setNameProduct] = useState('');


  function submitFormPayment(event) {
    event.preventDefault();

    const config = {
      headers: {
        //Authorization: `Bearer ${token}`,
      },
    };

    const dataCardPayment = {
      nameProduct: nameProduct,
      valuePayment: valueProduct,
      //descriptionProduct: descriptionProduct,
      //imageProduct: imageProduct,
      //categoryProduct: categoryProduct,
      cardName: cardName,
      cardNumber: cardDigits,
      securityNumber: securityCode,
      expirationDate: validity,
      valueQuota: valueQuota
    }

    /*     const API = "https://localhost:5007/payments";
        const promise = axios.post(API, dataCardPayment, config);
        promise.then(res => {
          setProductSelect(res.data);
          navigate('/purchases') //rota para registro da compra com informações sobre o produto.
        });
        promise.catch(() => {
          alert('Envio de dados para pagamento não realizado. Revise-os!');
        }) */

  }

  function validadeCard(creditCard) {
    return creditCard
      .replace(/\D/g, '')
      .replace(/(\d{4})(\d)/, '$1 $2')
      .replace(/(\d{4})(\d)/, '$1 $2')
      .replace(/(\d{4})(\d)/, '$1 $2')
      .replace(/(\d{4})(\d)/g, '$1');
  }

  function validadeCode(code) {
    return code
      .replace(/\D/g, '')
      .replace(/^(\d{3})(\d)/g, '$1');
  }

  function validadeDate(date) {
    return date
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})(\d)/g, '$1');
  }

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);


  function isNumeric(value) {
    return /^-?\d+$/.test(value);
  }

  function handleOpenNewTransactionModal() {

    if (isNumeric(cardName) === true) {
      alert('Digite caracteres alfabéticos no campo nome do cartão de crédito!');
      /* navigate(`/subscriptions/${planId}`); */
      //setIsNewTransactionModalOpen(false);
    } else {
      setIsNewTransactionModalOpen(true);
    }

  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);

  }


  return (
    <Container>

      <ContainerCheckout>

        <ContainerProduct>
          <p>Imagem do produto</p>
          <p>Nome do produto</p>
          <p>Categoria</p>
          <p>Descrição</p>
          <p>Desconto</p>
          <p>Promoção</p>
        </ContainerProduct>


        <FormCheckout>
          <InputLogin
            placeholder='Nome impresso no cartão'
            type='text'
            //value={cardName}
            //onChange={(e) => setCardName(e.target.value)}
            required
            autoComplete='on'
          />

          <InputLogin
            placeholder='Digitos do cartão'
            type='text'
            //value={cardDigits}
            //onChange={(e) => setCardDigits(validadeCard(e.target.value))}
            //required maxlength="16"
            //pattern="[0-9]{16}"
            autoComplete='on'
          />

          <ContainerInput>
            <InputPlan
              placeholder='Código de segurança'
              type='text'
              //value={securityCode}
              //onChange={(e) => setSecurityCode(validadeCode(e.target.value))}
              //required maxlength="3"
              //pattern="[0-9]{3}"
              autoComplete='on'
            />

            <InputPlan
              placeholder='Validade'
              type='text'
              //value={validity}
              //onChange={(e) => setValidity(validadeDate(e.target.value))}
              //required maxlength="5"
              autoComplete='on'
            />
          </ContainerInput>

          <ContainerInput>
            <DropDownHeader >
            <p>Parcelamento</p>

            </DropDownHeader>
          
            <InputPlan
              placeholder='Quantidade'
              type='number'
              min='1'
              max='12'
              //value={valueQuota}
              //onChange={(e) => setValueQuota(validadeDate(e.target.value))}
              //required maxlength="5"
              autoComplete='on'
            />
          </ContainerInput>

          <button type='button' onClick={handleOpenNewTransactionModal}>Comprar</button>

          <Modal
            isOpen={isNewTransactionModalOpen}
            onRequestClose={handleCloseNewTransactionModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
          >

            <button
              onClick={handleCloseNewTransactionModal}
              className="react-modal-close"
            >
              {/* <img src={closeImg} alt="botão para fechar modal" /> */}
            </button>
            <TextModal>
              Tem certeza que deseja fazer esta compra?
            </TextModal>

            <ContainerButtonsModal>

              <ButtonNot>
                <button type='button' onClick={handleCloseNewTransactionModal}>Não</button>
              </ButtonNot>

              <ButtonYes>
                <button type='submit' onClick={submitFormPayment}>Sim</button>
              </ButtonYes>

            </ContainerButtonsModal>
          </Modal>

        </FormCheckout>
      </ContainerCheckout>

    </Container>
  )
}

const DropDownHeader = styled.div`
  //margin-bottom: 0.8em;
  margin-top: 15px;
  padding: 0.4em 1em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 700;
  font-family: 'Raleway', sans-serif;
  font-size: 1.3rem;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--background-buttons-light);
  background: transparent;
  border: 1px solid var(--background-buttons-light);
  border-radius: 8px;
`

const ContainerProduct = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  width: 303px;
  height: 190px;
  background: var(--background-buttons);
  border-radius: 8px;
`

const ComeBack = styled.div`
    margin-left: 20px;

`
const ButtonClose = styled.button`

        cursor: pointer;
        border: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 1.5rem;
        margin-bottom: 1.2rem;
        width: 95px;
        height: 52px;

        background: #FF4791;
        border-radius: 8px;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;

        color: var(--white);
`

const ContainerButtonsModal = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;
`

const ButtonYes = styled.div`

button[type='submit'] {
        margin: 0 auto; 
        cursor: pointer;
        border: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 1.5rem;
        margin-bottom: 1.2rem;
        width: 95px;
        height: 52px;

        background: #FF4791;
        border-radius: 8px;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;

        color: var(--white);
}

`

const ButtonNot = styled.div`

button {
        margin: 0 auto; 
        cursor: pointer;
        border: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 1.5rem;
        margin-bottom: 1.2rem;
        width: 95px;
        height: 52px;

        background: #CECECE;
        border-radius: 8px;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;

        color: var(--white);
}

`

const TextModal = styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    color: #000000;

`


const ContainerPrice = styled.div`
    display: flex; 
    padding-left: 5px;
    margin-right: 5px;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
    img {
        margin-right: 5px;
    }

`

const ContainerCheckout = styled.div`
    margin: 0 auto; 
    h3 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: #FFFFFF;
    }

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        margin-left: 5px;

        color: #FFFFFF;
    }
`

const InputLogin = styled.input`

        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px; 
        width: 303px;
        height: 52px;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        padding-left: 0.7rem;
        background-color: var(--white);
        border: 1px solid var(--white);
        border-radius: 8px;
        
    &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        padding-left: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--gray-medium);
    }

    & + input {
        margin-top: 1rem; 
    }

`
const ContainerInput = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;

`

const InputPlan = styled.input`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1rem; 
        width: 145px;
        height: 52px;
        padding-left: 0.7rem;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        background-color: var(--white);
        border: 1px solid var(--white);
        border-radius: 8px;
        
    &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        padding-left: 1px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--gray-medium);
    }

`

const FormCheckout = styled.div`
    margin: 0 auto; 
    display: flex;
    flex-direction: column;

    button {
        margin: 0 auto; 
        cursor: pointer;
        border: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 1.5rem;
        margin-bottom: 1.2rem;
        width: 298px;
        height: 52px;

        background: var(--background-buttons-light);
        border-radius: 8px;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;

        color: var(--white);
        }

`


const Logo = styled.nav` 
    margin: 0 auto; 
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        padding-bottom: 0.4rem;
    }
`

const ImgSymbol = styled.img`
width: 139.38px;
height: 95.13px;

`

const ImgName = styled.img`
width: 164.38px;
height: 38px;
margin-bottom: 20px;
`
