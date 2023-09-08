import { jsx, keyframes } from '@emotion/react'

import styled from '@emotion/styled/macro'
import * as colors from './colors'
import {FaSpinner} from 'react-icons/fa'
import { AiOutlineMail } from "react-icons/ai"

export const EmailIcons = styled(AiOutlineMail) `
height: 24px; 
width: 24px; 
color: red;
`;

const spin = keyframes ({
    "0%": {transform: 'rotate(0deg)'},
    "100%": {transform: 'rotate(360deg)'},   

});

export const Spiner = styled(FaSpinner)({
    animation:`${spin} 1s linear infinite`
})

export function FullSpinner() {
    return <div style={{
        fontSize:"4rem",
        height: "4rem",
        display:"flex",
        flexDirection: "column",
        alignItems:"center",
    }}>
        <Spiner />
    </div>
}

export const WrapApp = styled.div `
max-width: 1200px;
margin: 1rem auto 0;
`;

export const WrapForm = styled.form({
    maxWidth: "400px",
    margin: "1rem auto",
}) ;

export const FormGroup = styled.div({
    marginBottom: "1rem",
}) ;

export const Label = styled.label({
    display: "block",
    marginBottom: "1rem",
}) ;

export const Input= styled.input({
    display: "block",
    width: "100%",
    padding: "0.6rem",
    marginBottom: "1rem",
}) ;

export const ButtonGroup= styled.div({
    padding: "0.5rem 0"
}) ;

export const Button= styled.button({
    padding: ".4rem .8rem",
    textTransform: "uppercase",
    borderColor: "transparent",
    borderRadius: "6px",
    cursor: "pointer",
    color: "#ffffff",


"&:hover": {
    backgroundColor: "#ff2b56"
},
},

({mr=0, type}) => ({
    marginRight: mr,
    backgroundColor: type === "reset" ? colors.danger : colors.primary,
    "&:hover": {
        backgroundColor: type === "reset" ? colors.dangerHover : colors.primaryHover
       } 
}),



) ;