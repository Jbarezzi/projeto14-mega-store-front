import styled from 'styled-components';

export default function Header({ children }) {

  return (
    <HeaderGlobal>{children}</HeaderGlobal>
  )
}

const HeaderGlobal = styled.header` 
  margin: 0 auto;
  width: 100%;
  height: 100px;
  //padding-left: 10px;
  background-color: var(--background-style);
  display: flex;
  //margin-left: 20px;
  justify-content: space-around;
  align-items: center;
  //padding: 2.4rem 0;

  @media (max-width: 768px) {

    html {
      font-size: 12px;
    }
    display: flex;
    flex-direction: colum;

    //justify-content: center;
    width: 100vh;
        
    }

  @media (max-width: 400px) {

    html {
    font-size: 12px;
   }

  justify-content: center;
  width: 100%;
 }

  h1 {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    //margin-top: 89px;
    color: var(--background-buttons);
  }
    
`

