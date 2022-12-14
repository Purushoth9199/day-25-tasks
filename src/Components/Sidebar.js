import React,{useState} from "react";
import { Collapse } from "bootstrap";
import { Link } from "react-router-dom";

function Sidebar () {
    const [toggleComponents , setToggleComponents] = useState(false);
    const [toggleUtilities , setToggleUtilities] = useState(false);
    const [togglePages , setTogglePages] = useState(false);

const handleCollapseComponent = ()=>{
    setToggleComponents(!toggleComponents);
    var myCollapse = document.getElementById("collapseComponents");
    var bsCollapse = new Collapse (myCollapse);
    toggleComponents ? bsCollapse.show() : bsCollapse.hide();
}


 const handleCollapseUtilities = ()=>{
        setToggleUtilities(!toggleUtilities);
        var myCollapse = document.getElementById("collapseUtilities");
        var bsCollapse = new Collapse (myCollapse);
        toggleUtilities ? bsCollapse.show() : bsCollapse.hide();
 };


  const handleCollapsePages= ()=>{
            setTogglePages(!togglePages);
            var myCollapse = document.getElementById("collapsePages");
            var bsCollapse = new Collapse (myCollapse);
            togglePages ? bsCollapse.show() : bsCollapse.hide();

};

    return ( 
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item active">
                <Link className="nav-link" to="/dashboard">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span> </Link>
            </li>

            <hr className="sidebar-divider"/>

            <div className="sidebar-heading">
                Interface
            </div>

            <li className="nav-item">
                <a className="nav-link collapsed" onClick={handleCollapseComponent} data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Components</span>
                </a>
                <div id="collapseComponents" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <Link className="collapse-item" to="/button">Buttons </Link>
                        <Link className="collapse-item" to="/card">Cards</Link>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <a className="nav-link collapsed" onClick={handleCollapseUtilities}  data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Utilities</span>
                </a>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Utilities:</h6>
                        <Link className="collapse-item" to="/colour">Colors</Link>
                        <Link className="collapse-item" to="/borders">Borders</Link>
                        <Link className="collapse-item" to="/animations">Animations</Link>
                        <Link className="collapse-item" to="/other">Other</Link>
                    </div>
                </div>
            </li>

            <hr className="sidebar-divider"/>


            <div className="sidebar-heading">
                Addons
            </div>

           
            <li className="nav-item">
                <a className="nav-link collapsed" onClick={handleCollapsePages} data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </a>
                <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Login Screens:</h6>
                        <a className="collapse-item" href="login.html">Login</a>
                        <Link className="collapse-item" to="/register">Register</Link>
                        <Link className="collapse-item" to="/forgot">Forgot Password</Link>
                        <div className="collapse-divider"></div>
                        <h6 className="collapse-header">Other Pages:</h6>
                        <Link className="collapse-item" to="/notfound">404 Page</Link>
                        <Link className="collapse-item" to="/blank">Blank Page</Link>
                    </div>
                </div>
            </li>

     
            <li className="nav-item">
                <Link className="nav-link" to="/charts">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span></Link>
            </li>


            <li className="nav-item">
                <Link className="nav-link" to="/tables">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Tables</span></Link>
            </li>

            <hr className="sidebar-divider d-none d-md-block"/>

          
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

           
            <div className="sidebar-card d-none d-lg-flex">
                <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..."/>
                <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
            </div>

        </ul>
        
    )
} ;
export default Sidebar ;