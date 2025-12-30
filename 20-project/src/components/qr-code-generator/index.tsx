import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQRCode() {
    if (input && input.trim() !== "") {
      setInput("");
      setQrCode(input);
    }
  }

  return (
    <div>
      <div>
        <input
          type="text"
          name="qr-code-input"
          placeholder=""
          onChange={(e) => setInput(e.target.value)}
          value={input}
          
        />{" "}
        <button onClick={handleGenerateQRCode}>generate</button>
      </div>
      <QRCode id="qr-code" value={qrCode} size={400} />
    </div>
  );
}
