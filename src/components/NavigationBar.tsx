/* eslint-disable jsx-a11y/anchor-is-valid */
import { join } from 'path'
import React, { useState } from 'react'
import App from '../App'


const NavigationBar = () => {

    const [page, setPage] = useState("page0")

    const changePageHandler = (toPage:string) => {
        setPage(toPage);
    }
    

    const sideNavBar = 
    <div><div className="d-flex flex-column flex-shrink-0 bg-light" style={{width: "4.5rem", float:"left", height: "100vh"}}>
    <a href="/" className="d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
      <svg className="bi" width="40" height="32"><use href="#bootstrap"></use></svg>
      <span className="visually-hidden">Icon-only</span>
    </a>
    <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
      <li className="nav-item">
        <a href="#" className={page==="page1"?"nav-link py-3 border-bottom active": "nav-link py-3 border-bottom"} 
        onClick={()=>changePageHandler("page1")}
        aria-current="page" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
          <svg className="bi" width="24" height="24" role="img" aria-label="Home"><use href="#home"></use></svg>
        </a>
      </li>
      <li>
        <a href="#" className={page==="page2"?"nav-link py-3 border-bottom active": "nav-link py-3 border-bottom"} 
        onClick={()=>changePageHandler("page2")}
        title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
          <svg className="bi" width="24" height="24" role="img" aria-label="Dashboard"><use href="#speedometer2"></use></svg>
        </a>
      </li>
      <li>
        <a href="#" className={page==="page3"?"nav-link py-3 border-bottom active": "nav-link py-3 border-bottom"} 
        onClick={()=>changePageHandler("page3")}
        title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Orders">
          <svg className="bi" width="24" height="24" role="img" aria-label="Orders"><use href="#table"></use></svg>
        </a>
      </li>
      <li>
        <a href="#" className={page==="page4"?"nav-link py-3 border-bottom active": "nav-link py-3 border-bottom"} 
        onClick={()=>changePageHandler("page4")}
        title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Products">
          <svg className="bi" width="24" height="24" role="img" aria-label="Products"><use href="#grid"></use></svg>
        </a>
      </li>
      <li>
        <a href="#" className={page==="page5"?"nav-link py-3 border-bottom active": "nav-link py-3 border-bottom"} 
        onClick={()=>changePageHandler("page5")}
        title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
          <svg className="bi" width="24" height="24" role="img" aria-label="Customers"><use href="#people-circle"></use></svg>
        </a>
      </li>
    </ul>
    <div className="dropdown border-top">
      <a href="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" className="rounded-circle"/>
      </a>
      <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown border-top" href="#" style={{position: "absolute",
      bottom: "0"}}>Sign out</a></li>
      </ul>
    </div>
  </div><div className="example-divider"></div></div>

    return(
    <div>
        {sideNavBar}
        <div>
            <App/>
        </div>
    </div>
    )
}

export default NavigationBar