import React from 'react'
import { BiHome , BiDetail, BiUser, BiHelpCircle, BiRestaurant } from "react-icons/bi";
function Sidebar() {
  return (
    <div className="container-fluid">
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-2 pt-4 text-white min-vh-100">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start " id="menu">
                    <li className="nav-item">
                        <a href="" className="nav-link align-middle px-0 fw-bold fst-italic">
                         <BiHome size="2em"/><span className="ms-2 d-none d-sm-inline">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" data-bs-toggle="collapse" className="nav-link px-0 align-middle fw-bold fst-italic">
                            <BiRestaurant size="2em"/><span className="ms-2 d-none d-sm-inline">Reviews</span> </a>

                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle fw-bold fst-italic">
                        <BiDetail size="2em"/><span className="ms-2 d-none d-sm-inline">Dishs Come True</span></a>
                    </li>
                    <li>
                        <a href="#" data-bs-toggle="collapse" className="nav-link px-0 align-middle fw-bold fst-italic">
                        <BiUser size="2em"/><span className="ms-2 d-none d-sm-inline">My Profile</span></a>
                    </li>
                    <li>
                        <a href="#" data-bs-toggle="collapse" className="nav-link px-0 align-middle fw-bold fst-italic">
                            <BiHelpCircle size="2em"/><span className="ms-2 d-none d-sm-inline">About</span> </a>
                    </li>
                    
                </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar