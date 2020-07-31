import styled from 'styled-components';

const Button = styled.button`
    color: var(--frontEnd);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: .3s;

  &:hover {
    color: var(--black);
    background-color: var(--white);
    padding: 20px 28px;
  }
`;

export default Button;