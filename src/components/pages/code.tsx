import React, { useState, useEffect } from "react";
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
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

type CodeProps = {};

const Code: React.FC<CodeProps> = () => {
    const [result, setResult] = useState<any>(null);
    const [userCode, setUserCode] = useState<string>('');
    const [sendRequest, setSendRequest] = useState(false);
    const [processing, setProcessing] = useState<null | boolean>(null)
const [outputDetails, setOutputDetails] = useState(null)
    const buttonState = useSelector((state: RootState) => state.buttonState);
    const { openPopup } = usePopup();
    // const handleSubmit = async () => {
    //     const apiKey = '7f2524c78emsh54262dc1f40ff6ep16878cjsn67460377ec0a';
    //     const url = 'https://run.judge0.com/api/runs';

    //     const payload = {
    //         source_code: userCode,
    //         language_id: 71, // Python

    //     };
    //     const headers = {
    //         'Content-Type': 'application/json',
    //         'X-API-KEY': apiKey,
    //     };

    //     try {
    //         const response = await axios.post(url, payload, { headers });
    //         setResult(response.data);
    //         setSendRequest(false);
    //         console.log('click');
    //         openPopup();
            
    //     } catch (error) {
    //         console.error('Error running the code:', error);
    //         setSendRequest(false);
    //         openPopup();
    //     }
        
    // };
     
    const handleSubmit = () => {
        setProcessing(true);
        const formData = {
          language_id: 71,
          // encode source code in base64
          source_code: btoa(userCode),
          //stdin: btoa(customInput),
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
          });
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
            //showSuccessToast(`Compiled Successfully!`)
            console.log('response.data', response.data)
            openPopup();
            return
          }
        } catch (err) {
          console.log("err", err);
          setProcessing(false);
          //showErrorToast(msg);
        }
      };







const onChange = (value: string) => {
    console.log(value);
    setUserCode(value);
};

// const showSuccessToast = (msg: string) => {
//     toast.success(msg || `Compiled Successfully!`, {
//       position: "top-right",
//       autoClose: 1000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });
//   };
//   const showErrorToast = (msg: any) => {
//     toast.error(msg || `Something went wrong! Please try again.`, {
//       position: "top-right",
//       autoClose: 1000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });
//   };


    return (
        
      
        <Split className="h-[calc(100vh-94px)]" direction="vertical" sizes={[60, 40]} minSize={60}>
            
            <div className="code-editor w-full overflow-auto">
                <CodeMirror className="w-full overflow-auto"
                value={challengeAnswers[buttonState].boilerPlate} //make it so it auto sets it for whatever question youre on
                theme={vscodeDark}
                onChange={onChange}
                extensions={[python()]}
                style={{fontSize: 16, textAlign: "left"}}
                />
            </div>
            
            <div className="w-full px-5 overflow-auto">
            <button onClick={handleSubmit} className='run-btn bg-[#282c34] border border-gray-300 w-full hover:bg-gray-300 hover:text-black p-2'>Run the Code!</button>
                <OutputWindow outputDetails={undefined}></OutputWindow>
                
                </div>
        </Split>
        
    )
}
export default Code;
