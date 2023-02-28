import styled, { css } from "styled-components";
import { shade } from "polished"

interface FormProps {
    hasError: boolean
}

export const Title = styled.h1`
    font-size: 4.8rem;
    color: #3a3a3a;
    margin-top: 8rem;
`

export const Form = styled.form<FormProps>`
    margin-top: 4rem;
    max-width: 70rem;

    display: flex;

    input {
        flex: 1;
        height: 7rem;
        padding: 0 2.4rem;
        border: none;
        border-radius: .5rem 0 0 .5rem;
        color: #3a3a3a;
        border: solid .2rem #fff;

        ${(props) => props.hasError && css`
            border-color: #c53030;
            border-right: 0;
        `}

        &::placeholder {
            opacity: .7;
        }
    }

    button {
        width: 21rem;
        height: 7rem;
        background: #088F8F;
        border-radius: 0 .5rem .5rem 0;
        border: none;
        color: #fff;
        font-weight: bold;
        transition: background-color .3s;

        &:hover {
            background: ${shade(0.2, "#088F8F")};
        } 
    }
`

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: .8rem;

`

export const Repositories = styled.div`
    margin-top: 8rem;
    max-width: 70rem;

    a {
        background: #fff;
        border-radius: .5rem;
        width: 100%;
        padding: 2.4rem;
        display: block;
        text-decoration: none;

        display: flex;
        align-items: center;
        transition: transform .3s;

        img {
            width: 6.4rem;
            height: 6.4rem;
            border-radius: 50%;
        }

        &:hover {
            transform: translateX(1rem);
        }

        & + a {
            margin-top: 1rem;
        }
    }

    div {
        margin: 0 1.6rem;
        flex: 1;

        strong {
            font-size: 2rem;
            color: #3D3D4D;
        }

        p {
            font-size: 1.8rem;
            color: #A8A8B3;
            margin-top: .4rem;
        }
    }

    svg {
        margin-left: auto;
        color: #CBCBD6;
    }

`