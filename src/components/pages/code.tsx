import React, { useState} from "react";
import Split from "react-split";
import CodeMirror from '@uiw/react-codemirror';
import {vscodeDark} from '@uiw/codemirror-theme-vscode';
import { python } from '@codemirror/lang-python'
import challengeAnswers from "../../object.jsx";
import './code.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../types';
import OutputWindow from "./outputWindow.jsx";
import { usePopup } from '../popupContext.js';
import 'react-toastify/dist/ReactToastify.min.css';
import OutputDetails from "./outputDetails.jsx";

type CodeProps = {};

const Code: React.FC<CodeProps> = () => {

    const [userCode, setUserCode] = useState<string>('');
    
    const [processing, setProcessing] = useState<null | boolean>(null)
const [outputDetails, setOutputDetails] = useState(null)
    const buttonState = useSelector((state: RootState) => state.buttonState);
    const { openPopup } = usePopup();
    //api call 
    const handleSubmit = () => {
      if (buttonState === 1){
        openPopup()
      } else {
        setProcessing(true);
        const formData = {
          language_id: 71,
          
          source_code: btoa(userCode),
         
        };
        const options = {
          method: "POST",
          url: process.env.REACT_APP_RAPID_API_URL,
          params: { base64_encoded: "true", fields: "*" },
          headers: {
            "content-type": "application/json",
            "Content-Type": "application/json",
            "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
            "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
          },
          data: formData,
        };
    
        axios
          .request(options)
          .then(function (response) {
            console.log("res.data", response.data);
            const token = response.data.token;
            checkStatus(token);
          })
          .catch((err) => {
            let error = err.response ? err.response.data : err;
            setProcessing(false);
            console.log(error);
          });}
      };
      const checkStatus = async (token: string) => {
        const options = {
          method: "GET",
          url: process.env.REACT_APP_RAPID_API_URL + "/" + token,
          params: { base64_encoded: "true", fields: "*" },
          headers: {
            "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
            "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
          },
        };
        try {
          let response = await axios.request(options);
          let statusId = response.data.status?.id;
    
          // Processed - we have a result
          if (statusId === 1 || statusId === 2) {
            // still processing
            setTimeout(() => {
              checkStatus(token)
            }, 2000)
            return
          } else {
            setProcessing(false)
            setOutputDetails(response.data)
            
            console.log('response.data', response.data)
            if (response.data?.status.description === "Accepted" && userCode.includes(challengeAnswers[buttonState].answer)){
              openPopup();
            }
            return
          }
        } catch (err) {
          console.log("err", err);
          setProcessing(false);
          
        }
      };






//sets the users code to whatever was typed in the code editor
const onChange = (value: string) => {
    console.log(value);
    setUserCode(value);
};



    return (
        
      
        <Split className="h-[calc(100vh-94px)]" direction="vertical" sizes={[60, 40]} minSize={60}>
            
            <div className="code-editor w-full overflow-auto">
                <CodeMirror className="w-full overflow-auto"
                value={challengeAnswers[buttonState].boilerPlate} //boilerplate code for each question
                theme={vscodeDark}
                onChange={onChange}
                extensions={[python()]}
                style={{fontSize: 16, textAlign: "left"}}
                />
            </div>
            
            <div className="w-full px-5 overflow-auto py-3">
            <button onClick={handleSubmit} className='run-btn bg-[#282c34] border border-gray-300 w-full hover:bg-gray-300 hover:text-black p-2'>Run the Code!</button>
            {processing && <p>Processing...</p>} //displays processing message when run code is clicked before the api call is complete
                <div className="flex flex-row py-3">
                <OutputWindow outputDetails={outputDetails}></OutputWindow>
                {outputDetails && <OutputDetails outputDetails={outputDetails}/>}
                </div>
                </div>
        </Split>
        
    )
}
export default Code;
