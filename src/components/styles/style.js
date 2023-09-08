import styled from '@emotion/styled/macro'



export const Header = styled.h1`
margin-bottom: 1rem;
text-align: ${props => props.align || ""};
color: ${props => props.color || ""}
`;

export const Header1 = styled(Header) `
font-size: 2rem;
`;

export const WrapButton = styled.div`

margin: 1rem auto 0;
`;

export const Button = styled.button`
    font-size: 1rem;
    marging: 1rem;
    padding: 0.5rem 2rem;
    border: 4px double white;
    border-radius: 5px;
    margin-right: 1rem;
    background-color: #1d4ed8;
    color: white;

    background:${props => props.primary && "#1e1b4b"};
    color:${props => props.primary ? "white" : "#172554"}
`;