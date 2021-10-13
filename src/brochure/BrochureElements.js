import styled from "styled-components";

export const Card = styled.div`
    width: 100%;
    height: 100px;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 12px;
    border-radius: 10px;
    margin-bottom: 1rem;
    padding: 1rem;
    display: flex;
    align-items: center;

    
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;
        cursor: pointer;
    }
`

export const BrochureTitle = styled.h3`
    color: #333;
    font-size: clamp(16px, 1.75vw, 20px);
    font-weight: ภ00;

`

export const CompanyLogo = styled.img`
    width: 80px;
    height: 80px;
    margin-right: 1.5rem;
    border-radius: 10px;

`

export const BrochureDesc = styled.h4`
    color: #6C7885;
    font-size: clamp(12px, 1.25vw, 16px);
    font-weight: 400;

`

// export const Image = styled.img`
//     height: auto;
//     width: 100%;

// `