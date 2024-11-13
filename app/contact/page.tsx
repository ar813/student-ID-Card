"use client"

import { useState, useEffect } from "react";
// @ts-ignore
import QRCode from "qrcode";

const Page = () => {
  const [text, setText] = useState("");
  const [qrCodeData, setQrCodeData] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;
    setText(inputText);

    if (inputText) {
      QRCode.toDataURL(inputText)
        .then((url:any) => {
          setQrCodeData(url);
        })
        .catch((err:any) => {
          console.error("Error generating QR Code", err);
        });
    } else {
      setQrCodeData(null);
    }
  };

  return (
    <div>
      <h1>Generate QR Code</h1>
      <input 
        type="text" 
        placeholder="Enter text" 
        value={text} 
        onChange={handleChange} 
      />
         {qrCodeData && (
        <div style={{ marginTop: '20px' }}>
          <img src={qrCodeData} alt="Generated QR Code" />
        </div>
      )}
    </div>
  );
};

export default Page;
