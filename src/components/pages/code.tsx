import React, { useState, useEffect } from "react";
import Split from "react-split";
import CodeMirror from '@uiw/react-codemirror';
import {vscodeDark} from '@uiw/codemirror-theme-vscode';
import { python } from '@codemirror/lang-python'
import challengeAnswers from "../../object.jsx";
import './code.css';
import axios from 'axios';

type CodeProps = {};

const Code: React.FC<CodeProps> = () => {
    const [result, setResult] = useState<any>(null);
    const [userCode, setUserCode] = useState<string>('');
    const [sendRequest, setSendRequest] = useState(false);
   

    const handleSubmit = async () => {
        const apiKey = '7f2524c78emsh54262dc1f40ff6ep16878cjsn67460377ec0a';
        const url = 'https://run.judge0.com/api/runs';

        const payload = {
            source_code: userCode,
            language_id: 71, // Python

        };
        const headers = {
            'Content-Type': 'application/json',
            'X-API-KEY': apiKey,
        };

        try {
            const response = await axios.post(url, payload, { headers });
            setResult(response.data);
            setSendRequest(false);
            alert('this worked')
            console.log('click')

        } catch (error) {
            console.error('Error running the code:', error);
            setSendRequest(false);
            alert('this worked')
        }
        
    };
     








const onChange = (value: string) => {
    console.log(value);
    setUserCode(value);
};



    return (
        <Split className="h-[calc(100vh-94px)]" direction="vertical" sizes={[60, 40]} minSize={60}>
            <div className="code-editor w-full overflow-auto">
                <CodeMirror className="w-full overflow-auto"
                value={challengeAnswers[2].boilerPlate} //make it so it auto sets it for whatever question youre on
                theme={vscodeDark}
                onChange={onChange}
                extensions={[python()]}
                style={{fontSize: 16, textAlign: "left"}}
                />
            </div>
            <div className="w-full px-5 overflow-auto">
                {/* test case heading */}
                <div className="flex h-10 items-center space-x-6">
                <div className="relative flex h-full flex-col justify-center cursor-pointer">
                <div className="leading-5">Test Cases</div>
                <hr className="absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white"></hr>
                </div>
                </div>
                <div className="flex">

                {/* case 1 */}
                <div className="mr-2 items-start mt-2">
                    <div className="flex flex-wrap items-center gap-y-4">
                        <div className="item-center transition-all focus:outline-none inline-flex">
                            Case 1
                        </div>
                    </div>
                </div>
                </div>
                <button onClick={handleSubmit} className='run-btn bg-[#282c34] border border-gray-300 w-full hover:bg-gray-300 hover:text-black p-2'>Run the Code!</button>
                </div>
        </Split>
    )
}
export default Code;