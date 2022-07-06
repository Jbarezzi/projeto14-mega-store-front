import styled from 'styled-components';

export default function Container ({children}) {

    return (
        <ContainerGlobal>{children}</ContainerGlobal>
    )
}

const ContainerGlobal = styled.div` 
    margin: 0 auto;
    padding-top: 30px;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    padding: 10px 0;
   
    -webkit-box-align: center;

    width: 375px;
    height: 660px;
    z-index: 1;
    background: var(--background);

    //transition: all .3s ease;

    &::before, ::after {
        border-color: #e2e8f0; 
        border-width: 0;
        border-style: solid;
    }
`