// import { useState } from "react";
import { navigateToUrl } from "single-spa";
import Parcel from "single-spa-react/parcel";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Root(props) {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="about">About</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Parcel
                config={(): Promise<any> =>
                  System.import("@organization/parcel")
                }
              >
                {props.name} is mounted!
              </Parcel>
              <Parcel
                config={(): Promise<any> =>
                  System.import("@organization/parcel")
                }
              >
                {props.name} is mounted!
              </Parcel>
              <button onClick={() => navigateToUrl("/about")}>Navigate to /about</button>
            </>
          }
        />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
    </BrowserRouter>
  );
}
