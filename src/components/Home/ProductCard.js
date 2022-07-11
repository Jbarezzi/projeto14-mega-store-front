import styled from "styled-components";
import { BsCartPlus } from "react-icons/bs";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 5px;
    img {
        width: 250px;
        height: 250px;
        border-radius: 3px;
    }
    button {
        background-color: var(--background-buttons);
        border: none;
        width: 250px;
        border-radius: 4px;
    }
`;

function ProductCard({ product }) {
    return(
        <Container>
            <img src={product.image} alt={`Foto de ${product.name}`} />
            <button><BsCartPlus size={"2rem"} /></button>
        </Container>
    );
}

export default ProductCard;