import { useState } from "react";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import { login } from "./../../services"
import { Link, useNavigate } from "react-router-dom";

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

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        color: var(--white);
        font-size: 30px;
    }
    a {
        margin-top: 15px;
        font-weight: 700;
        color: var(--white);
    }
`;

function SignInPage() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [load, setLoad] = useState(false);

    async function handleLogin(e) {
        e.preventDefault();
        setLoad(true);
        try {
            await login(user);
            setLoad(false);
            navigate("/", { replace: true });
        } catch(error) {
            setLoad(false);
            alert(error.response.data);
        }
    }

    return(
        <StyledContainer>
            <h1>Mega Store</h1>
            <Form onSubmit={handleLogin}>
                <input 
                    type="email" 
                    required 
                    placeholder="Email" 
                    value={user.email}
                    disabled={load} 
                    onChange={(e) => setUser({ ...user, email: e.target.value })} />
                <input 
                    type="password" 
                    required 
                    placeholder="Senha" 
                    value={user.password}
                    disabled={load} 
                    onChange={(e) => setUser({ ...user, password: e.target.value })} />
                <button type="submit" disabled={load}>
                    { load ? <ThreeDots color="#FFFFFF" width="54" height="15" /> : "Entrar"}
                </button>
            </Form>
            <Link to="/sign-up">Primeira vez? Cadastre-se</Link>
        </StyledContainer>
    );
}

export default SignInPage;

