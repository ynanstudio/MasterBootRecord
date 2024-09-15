import { useState } from "react";
import logo from "/logo.svg";
import { decodeROT13 } from "./utils";
import "./App.css";

function App() {
    const [inputText, setInputText] = useState(''); // состояние для текста на входе
    const [showAnswer, setShowAnswer] = useState(false); // состояние для показа ответа

    const DecodeClick = () => {
        setShowAnswer(true); // при нажатии на кнопку показываем ответ
    };

    return (
        <>
            <div>
                <a href="https://sbergraduate.ru/" target="_blank" rel="noopener noreferrer">
                    <img src={logo} className="logo" alt="Sber logo"/>
                </a>
            </div>
            <h1>Sber Ural Code</h1>
            <input 
                className="input"
                type="text"
                required
                onChange={(e) => setInputText(e.target.value)} // обновляем состояние с текстом
            />
            {showAnswer && inputText !== '' && (
                <>
                    <span>Ответ на контрольный вопрос:</span>
                    <h3 className="answer">
                        {decodeROT13(inputText)} {/* декодируем введенный текст */}
                    </h3>
                </>
            )}
            <div className="card">
                <button onClick={DecodeClick}>
                    Декодировать
                </button>
            </div>
            <p className="read-the-docs">Нажмите на логотип, чтобы узнать о Сбере<br/>Master Boot Record</p>
        </>
    );
}

export default App;
