import styled from "styled-components";

export const StyledUserPage = styled.div`
    width: 100%; 
    max-width: 770px;
    
    .loading > h3{
        position: absolute;
        top: 16px;
        left: 16px;
        color: white;
        font-weight: 600;
        font-size: 1.125rem;
    }

    .warningDiv{
        display: flex;
        flex-direction: column;
        gap: 22px;
        margin-top: 38px;
    }

    div > h2{
        color: var(--grey-0);
        font-weight: 700;
        font-size: 1.125rem;
    }

    div > span{
        color: #FFFFFF;
        font-weight: 400;
        font-size: 1rem;
    }
`