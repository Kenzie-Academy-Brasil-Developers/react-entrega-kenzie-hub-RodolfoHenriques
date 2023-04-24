import styled from "styled-components"

export const StyledViewTechCard = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    .modalBoxContainer{
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.6);
        width: 100vw;
        height: 100vh;

        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;

        z-index: 2;
    } 
    
    p{
        padding: 8px 0;
        color: var(--grey-1);
        font-weight: 400;
        font-size: 0.75rem;
    }

    .titleDiv{
        background-color: var(--grey-2);
        width: 100%;
        border-radius: 4px;
        padding: 14px 20px;
    }

    h3{
        font-weight: 700;
        font-size: 0.875rem;
        color: var(--grey-0);
    }
    
    .closeButton{
        position: absolute;
        top: 14px;
        right: 20px;
        background-color: var(--grey-2);
        font-weight: 600;
        font-size: 0.9rem;
        color: var(--grey-0);
        border: none;
    }

    .controlsDiv{
        padding: 14px 20px;
        display: flex;
        flex-direction: column;
        gap: 18px;
    }

    .modalDiv{
        width: 95%;
        height: auto;
        background-color: var(--grey-3);
        border-radius: 4px;
        position: relative;
    }

    .buttonsDiv{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .changeTech {
        height: auto;
        background-color: var(--color-primary);
        border-radius: 4px;
        border: none;
        padding: 12px 36px;
        font-weight: 500;
        font-size: 1rem;
        color: #FFFFFF;
    }

    .deleteTech {
        height: auto;
        background-color: var(--grey-1);
        border-radius: 4px;
        border: none;
        padding: 12px 26px;
        font-weight: 500;
        font-size: 1rem;
        color: #FFFFFF;
    }

    .registerTech:hover {
        background-color: var(--color-primary-focus);
    }

    @media(min-width: 800px){
        .modalDiv{
            max-width: 380px;
        }
    }
`
