import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { TbBrandTelegram } from 'react-icons/tb'
import axios from "axios";
const ChatBot = () => {
    const inputRef = useRef(null);
    const [msg, setMsg] = useState('');
    const [chatContent, setChatContent] = useState([]);

    useEffect(() => {
        console.log("chatContent", chatContent);
    }, [chatContent]);

    const chatWithChatGpt = async () => {
        setChatContent(chatContent => [...chatContent, {me: msg}]);
        setMsg('');
        await axios.post('https://chatgpt-analysis.herokuapp.com/expert_analysis', {
            user_content: msg
        }).then(res => {
            setChatContent(chatContent => [...chatContent, {helper: res.data.response}]);
        }).then(err => console.log(err))
    }

    return (
        <Wrapper>
            <Chatbox>
                {
                    chatContent.map((item, index) => 
                    (
                        <>
                            {
                                item.me && (
                                    <p><b>me:</b> {item.me}</p>
                                )
                            }
                            {
                                item.helper && (
                                    <p><b>insightX:</b> {item.helper}</p>
                                )
                            }
                        </>
                    ))
                }
            </Chatbox>

            <ChatInputBox>
                <ChatInput placeholder="" 
                    onKeyDown={(e) => {
                        if (e.code !== 'Enter') return;
                        chatWithChatGpt();
                    }} ref={ inputRef } 
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                />
                <TbBrandTelegram onClick={() => chatWithChatGpt()}></TbBrandTelegram>
            </ChatInputBox>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 10px;
`

const Chatbox = styled.div`
    padding: 10px;
    width: 100%;
    min-height: 300px;
    max-height: 300px;
    overflow-y: auto;
`

const ChatInputBox = styled.div`
    /* display: flex;
    align-items: center;
    justify-content: space-between; */

    svg {
        color: #00c689;
        transform: scale(1.3);
        margin-left: 10px;
    }
`

const ChatInput = styled.input`
    width: calc(100% - 30px);
    border: 1px solid rgba(139, 155, 172, 0.3);
    border-radius: 5px;
    padding: 5px;
    padding-left: 10px;
    &:focus {
        outline: 1px solid #00c689;
    }
`

export default ChatBot;