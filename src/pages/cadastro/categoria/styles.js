import styled from 'styled-components';

const Categoria = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    form{
        display: flex;
        flex-direction: column;
        margin-bottom: 1%;
    }

    label,input{
        border-radius: 5px;
        margin-bottom:15px;
        outline: none;
        text-align: center;
    }

    button{
        background-color: var(--grayLight);
        border: 1px solid var(--grayMedium);
        padding: 5%;
        margin-bottom:30%
    }
`;

export default Categoria;