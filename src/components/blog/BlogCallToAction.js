import React, {useState, useLayoutEffect, useEffect} from "react";
import {TryAiButton} from "../pricing/styledComponents";
import styled from 'styled-components';

const Wrapper = styled.div`
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 15px 0;
    boxShadow: 0px -2px 6px 0px rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    z-index: 999;
    
    button {
        height: 50px !important;
        padding: 0 30px;
            
        span {
            font-size: 16px;
        }
    }
    
    @media screen and (max-width: 800px) {
        button {
            height: 40px !important;
            padding: 0 20px;
            
            span {
                font-size: 16px;
            }
        }
    }
    
    @media screen and (max-width: 500px) {
        padding: 10px 5px;
        div {
            font-size: 14px;
        }
        button {
            height: 40px !important;
            padding: 0 20px;
            width: 160px;
            
            span {
                font-size: 16px;
            }
        }
    }
    
    `;

export default function BlogCallToAction({text, buttonText, attachTo}) {

    const [show, setShow] = useState(false);

    useLayoutEffect(() => {
        const contentEl = document.getElementById(attachTo);
        const onscroll = (ev) => {
            if (window.scrollY > contentEl.getBoundingClientRect().top && window.scrollY < contentEl.offsetHeight) {
                setShow(true);
            }else {
                console.log('Set false');
                setShow(false);
            }
        };
        window.addEventListener("scroll", onscroll, false);

        return () => window.removeEventListener("scroll", onscroll, false);
    }, []);

    useEffect(() => {
        console.log(show);
    }, [show]);

    return(
        <Wrapper style={{ marginBottom: show ? "0px" : "-100px" }}>
            <div style={{marginRight: "20px"}}>{text}</div>
            <TryAiButton onClick={() => {
                window.open('https://app.softcube.com', '_blank');
            }} text={buttonText} />
        </Wrapper>
    );
}
