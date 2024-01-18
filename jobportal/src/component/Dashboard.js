import { useEffect } from "react";
import Dashbody from "./Dashbody";
import Container from 'react-bootstrap/Container';
import { json, useNavigate } from "react-router-dom";

function Dashboard(){
    const Navigate=useNavigate();

    return (
        < Container className="dashBoard">
            <Dashbody/>
</Container>
        
    );
}

export default Dashboard;