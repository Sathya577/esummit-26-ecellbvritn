import { useEffect, useState } from "react";
import "./loading.css";

export default function LoadingScreen({ onFinish }) {
  const text = "Entrepreneurship Cell Presents";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 50);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        onFinish();
      }, 1500);
    }
  }, [index]);

  return (
    <div className="loading-container">
      <h2 className="typing">{displayText}</h2>
      <h1 className="summit-title">E-SUMMIT 2026</h1>
    </div>
  );
}