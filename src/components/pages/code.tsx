import React from "react";
import Split from "react-split";
import CodeMirror from '@uiw/react-codemirror';
import {vscodeDark} from '@uiw/codemirror-theme-vscode';
import { python } from '@codemirror/lang-python'
type CodeProps = {};

const Code: React.FC<CodeProps> = () => {
    return (
        <Split className="h-[calc(100vh-94px)]" direction="vertical" sizes={[60, 40]} minSize={60}>
            <div className="w-full overflow-auto">
                <CodeMirror
                value="for n in nums;"
                theme={vscodeDark}
                extensions={[python()]}
                style={{fontSize: 16}}
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
                </div>
        </Split>
    )
}
export default Code;