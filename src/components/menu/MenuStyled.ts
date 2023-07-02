import { css, styled } from "styled-components";

export const MenuContainer = styled.div`
${() => {
        return css`
    background: white;
    color: black;
    height: 100%;
    min-width: 360px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    .menu-header{
        display: flex;
    flex-direction: column;
    gap: 58px;
    padding: 10px 10px 0px 10px;
    }
    .menu-body{
        flex-basis: 100%;
        flex-grow: 1;
        position: relative;
        overflow: scroll;
        overflow-x: hidden;
        margin-right: 5px;
    }
    .menu-footer{
        text-align: start;
        padding: 20px;
    }
    `
    }}
`;

export const MenuItem = styled.div`
${() => {
        return css`
    padding: 0 20px;
    text-align: start;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 30px;
span {
    max-width: 280px;
    font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 30px;
}
    &:not(:last-child){
        margin-bottom: 20px;
    }
    &:hover{
        background: #F1F8FE;
    }
    `
    }}
`;

export const GroupItem = styled.div<any>`
    ${({ isSubMenu }) => {
        return css`
        display: flex;
        background: white;
        flex-direction: flex-reverse;
        align-items: center;
        justify-content: start;
        gap: 5px;
        padding: 8px 8px 20px 0;
        cursor: pointer;
        position: sticky;
        left: 0;
        right: 0;
        top: 0;
        span{
            font-size: 22px;
font-style: normal;
font-weight: 500;
line-height: 32px;
        }
        .chevron{
            transform: rotate(90deg);
        }
        &::after{
            content: ${isSubMenu && ''};
            position: absolute;
            left: -10px;
            right: 0;
            background-color: #C6D6E5;
            height: 1px;
            bottom: 0;
            width: 360px;
        }
`
    }}
`;

export const MenuItemWithDescription = styled.div`
${() => {
        return css`
    max-width: 300px;
    text-align: start;
    margin: 0 auto;
    font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
&:not(:last-child){
    margin-bottom: 34px;
}
    `
    }}
`;

export const MenuItemDescription = styled.p`
${() => {
        return css`
    font-size: 12px;
    color: #577188;
font-style: normal;
font-weight: 400;
line-height: 20px;
margin: 0;
    `
    }}
`;

export const MenuItemTitle = styled.p`
${() => {
        return css`
    margin: 3px 0 5px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
`
    }}
`

export const Separator = styled.div`
${() => {
        return css`
    width: 100%;
height: 1px;
background: #C6D6E5;
`
    }}
`