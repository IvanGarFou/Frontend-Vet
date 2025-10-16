import { useRef, useEffect, useState } from "react";
import ButtonForm from "./ButtonForm";

export default function Firma({ onSave }) {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);

  // Estilos de Trazo //

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#4b4b4b";
  }, []);

  const getPos = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const t = e.touches ? e.touches[0] : e;
    return { x: t.clientX - rect.left, y: t.clientY - rect.top };
  };

  const start = (e) => {
    setDrawing(true);
    const { x, y } = getPos(e);
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const move = (e) => {
    if (!drawing) return;
    const { x, y } = getPos(e);
    const ctx = canvasRef.current.getContext("2d");
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const end = () => setDrawing(false);

  const clear = () => {
    const c = canvasRef.current;
    const ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
  };

  const save = () => {
    const dataUrl = canvasRef.current.toDataURL("image/png");
    onSave?.(dataUrl);
  };

  return (
    <div className="space-y-2">
      <div className="w-full h-44 rounded-xl border-2 border-dashed border-[#A8C3A0] bg-[rgba(168,195,160,0.12)] relative overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          onMouseDown={start}
          onMouseMove={move}
          onMouseUp={end}
          onMouseLeave={end}
          onTouchStart={start}
          onTouchMove={move}
          onTouchEnd={end}
        />
      </div>
      <div className="flex gap-2 justify-end">
        <ButtonForm type="button" onClick={clear} style="actionGreen">
          Limpiar firma
        </ButtonForm>
        <ButtonForm type="button" onClick={save} style="actionOrange">
          Guardar firma
        </ButtonForm>
      </div>
    </div>
  );
}
