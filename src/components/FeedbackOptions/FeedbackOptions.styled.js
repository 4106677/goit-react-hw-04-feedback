import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  flex-direction: row;

  padding: 10px;
`;

export const Button = styled.button`
  &:not(:first-child) {
  margin-left 20px;
  }

 
    position: relative;


    border: 0px;

    cursor: pointer;

    text-transform: uppercase;
    min-width: 64px;
    padding: 6px 16px;
    border-radius: 4px;
    /* transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; */
    color: rgb(255, 255, 255);
    background-color: rgb(25, 118, 210);
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;

`;
