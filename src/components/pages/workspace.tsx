import React from "react";
import Split from "react-split"
import ProblemDescription from "./ProblemDescription.tsx";
import './workspace.css'
import Code from './code.tsx'
type WorkspaceProps = {};

const Workspace: React.FC<WorkspaceProps> = () => {
    return (
        
        //this flex flex-row is what fixed it when the gutter wouldnt show
        <Split className="Split flex flex-row"> 
            
            
            <ProblemDescription/>
            <Code/>
            

        </Split> 
        
    );
};
export default Workspace;
