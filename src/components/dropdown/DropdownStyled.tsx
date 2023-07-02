import { styled, css } from "styled-components";
type DropdownTriggerProps = {
    isOpen: boolean
}
export const DropdownTrigger = styled.button<DropdownTriggerProps>`
${(props) => {
        return css`
    padding: 4px 8px;
    align-items: center;
    gap: 4px;
    background: transparent;
    display: flex;
    color: black;
    border-radius: 2px;

    
    //  styles for opened menu list 
    outline: ${props.isOpen && '2px solid rgba(131, 188, 255, 0.5)'};
    background: ${props.isOpen && 'rgba(29, 125, 237, 0.1);'};
    .chevron{
        transform: ${props.isOpen && 'rotate(180deg);'}
    }
    `
    }}
`;

export const ListItem = styled.div`
${() => {
        return css`
    font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 24px;
padding: 8px 15px;
align-items: center;
cursor: pointer;
text-align: start;
  &.active{
    background: #F1F8FE;
  }
  .list-item-content{
    gap: 10px;
  }
    `
    }}
`;

export const DropdownMenu = styled.ul`
${() => {
        return css`
    width: 180px;
    position: absolute;
    z-index: 3;
    background: white;
box-shadow: 0px 3px 5px 0px rgba(116, 137, 155, 0.08), 0px 1px 18px 0px rgba(116, 137, 155, 0.04), 0px 6px 10px 0px rgba(116, 137, 155, 0.06);
    `
    }}
`

