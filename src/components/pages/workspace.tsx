import React from "react";
import Split from "react-split"
import ProblemDescription from "./ProblemDescription.tsx";
import './workspace.css'
type WorkspaceProps = {};

const Workspace: React.FC<WorkspaceProps> = () => {
    return (
        
        
        <Split className="Split flex flex-row">
            
            
            <ProblemDescription/>
            <div>The Code Editor will be here </div>
            

        </Split> 
        
    );
};
export default Workspace;
