"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Loader() {
  const [show, setShow] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
    }, 4800);
    return () => clearTimeout(timer);
  }, [pathname]);

  const handleWhiteBox = () => {
    const yellowBox = document.querySelector(".yellow-box");
    if (yellowBox) yellowBox.classList.add("yellow-rotate");
  };

  if (!show) return null;

  return (
    <>
      <style>{`
        @keyframes moveWhite {
          0% { top: 5px; left: 5px; }
          25% { top: 5px; left: calc(100% - 15px - 5px); }
          50% { top: calc(100% - 15px - 5px); left: calc(100% - 15px - 5px); }
          75% { top: calc(100% - 15px - 5px); left: 5px; }
          100% { top: 5px; left: 5px; }
        }
        @keyframes typing {
          from { width: 0; }
          to { width: 75px; }
        }
        @keyframes backspace {
          from { width: 75px; }
          to { width: 0; }
        }
        @keyframes blinkCursor {
          from { border-color: #FFDE39; }
          to { border-color: transparent; }
        }
        .yellow-rotate {
          animation: yellowRotate 1s forwards;
        }
      `}</style>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "#000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            className="yellow-box"
            style={{
              height: "50px",
              width: "50px",
              backgroundColor: "#FFDE39",
              position: "relative",
              margin: "0 auto",
              perspective: "200px",
              overflow: "visible",
            }}
          >
            <div
              onAnimationEnd={handleWhiteBox}
              style={{
                height: "14px",
                width: "14px",
                backgroundColor: "white",
                position: "absolute",
                animation: "moveWhite 2s infinite",
              }}
            />
          </div>
          <div
            style={{
              color: "white",
              fontSize: "11px",
              fontWeight: 200,
              marginTop: "20px",
              height: "25px",
              fontFamily: "monospace",
              whiteSpace: "nowrap",
              overflow: "hidden",
              borderRight: "2px solid white",
              width: 0,
              textAlignLast: "center",
              animation:
                "typing 1.8s steps(11) forwards, backspace 1.8s steps(11) 3s forwards, blinkCursor .7s infinite",
            }}
          >
            Please wait
          </div>
        </div>
      </div>
    </>
  );
}
