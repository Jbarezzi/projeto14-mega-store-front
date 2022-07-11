import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "../../contexts/UserContext";
import { login } from "./../../services";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    padding: 15px;
    input {
        background-color: var(--white);
        border: none;
        border-radius: 6px;
        height: 60px;
        font-size: 20px;
        padding-left: 12px;
        :focus {
            border: none;
            outline: none;
        }
    }
    button {
        height: 60px;
        border: none;
        outline: none;
        background-color: var(--background-buttons-light);
        border-radius: 6px;
        font-size: 20px;
    }
`;

const ContainerSignUp = styled.div`
    margin: 0 auto;
    width: 326px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--background-style);
    height: 660px;
    h1 {
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 50px;
        margin-top: 89px;
        color: var(--background-buttons);
    }
    a {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        text-decoration: none;
        color: var(--white);
    }
`

function SignInPage() {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: "",
    });
    const [load, setLoad] = useState(false);

    async function handleLogin(e) {
        e.preventDefault();
        setLoad(true);
        try {
            const response = await login(userLogin);
            setLoad(false);
            setUser(response.data);
            navigate("/", { replace: true });
        } catch(error) {
            setLoad(false);
            alert(error.response.data);
        }
    }

    return(
        <ContainerSignUp>
            <h1>Mega Store</h1>
            <Form onSubmit={handleLogin}>
                <input 
                    type="email" 
                    required 
                    placeholder="Email" 
                    value={userLogin.email}
                    disabled={load} 
                    onChange={(e) => setUserLogin({ ...userLogin, email: e.target.value })} />
                <input 
                    type="password" 
                    required 
                    placeholder="Senha" 
                    value={userLogin.password}
                    disabled={load} 
                    onChange={(e) => setUserLogin({ ...userLogin, password: e.target.value })} />
                <button type="submit" disabled={load}>
                    { load ? <ThreeDots color="#FFFFFF" width="54" height="15" /> : "Entrar"}
                </button>
            </Form>
            <Link to="/sign-up">Primeira vez? Cadastre-se</Link>
        </ContainerSignUp>
    );
}

export default SignInPage;

