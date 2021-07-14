import React from "react";


import AllPagesPDFViewer from "./components/all-pages";

/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import samplePDF from "./sample1.pdf";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
     


      <div className="all-page-container">
        <AllPagesPDFViewer pdf={samplePDF} />
      </div>

      <hr />
    </div>
  );
}