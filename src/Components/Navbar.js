import React from "react";
import { useSelector } from "react-redux";

export const Navbar = () => {
  // Here state means combined reducers
  const amount = useSelector((state) => state.amount);
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Ritesh Bank
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  About
                </a>
              </li>
            </ul>
            <div className="balance">
              <button disabled={true} className="btn btn-primary">
                Balance : {amount}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
