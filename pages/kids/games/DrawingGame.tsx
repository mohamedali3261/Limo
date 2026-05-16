import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trash2, Download, Image as ImageIcon, ChevronDown, PaintBucket } from 'lucide-react';
import { kidsGameLevels } from '../../../data/kids/levels';

export default function DrawingGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const maskCanvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#ef4444');
  const [brushSize, setBrushSize] = useState(12);
  const [selectedCategory, setSelectedCategory] = useState(kidsGameLevels[0]);
  const [activeTemplate, setActiveTemplate] = useState<any | null>(null);

  const colors = [
    '#ef4444', '#f97316', '#eab308', '#22c55e', '#06b6d4', '#3b82f6', '#a855f7', '#ec4899', '#000000', '#ffffff'
  ];

  const clearDrawingArea = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  };

  const clearCanvas = () => {
    clearDrawingArea();
  };

  const removeTemplate = () => {
    const mask = maskCanvasRef.current;
    setActiveTemplate(null);
    clearDrawingArea();
    if (mask) {
      const ctx = mask.getContext('2d');
      if (ctx) {
         ctx.clearRect(0, 0, mask.width, mask.height);
      }
    }
  };

  const loadTemplate = (template: any) => {
    setActiveTemplate(template);
    const canvas = maskCanvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Clear drawing
        clearDrawingArea();

        const w = canvas.width;
        const h = canvas.height;

        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, w, h);

        // Draw emoji
        ctx.font = '200px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(template.emoji, w / 2, h / 2 - 80);

        // Calculate font size for the text to fit
        let fontSize = 120;
        ctx.font = `bold ${fontSize}px "Comic Sans MS", cursive, sans-serif`;
        // Try to add letter spacing for clearer letters if possible
        if ('letterSpacing' in ctx) {
          (ctx as any).letterSpacing = '10px';
        }
        
        let textWidth = ctx.measureText(template.name).width;
        
        while (textWidth > w - 80 && fontSize > 40) {
          fontSize -= 5;
          ctx.font = `bold ${fontSize}px "Comic Sans MS", cursive, sans-serif`;
          textWidth = ctx.measureText(template.name).width;
        }

        // Punch hole for text inside white mask
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillText(template.name, w / 2, h - 80);
        
        // Draw text dashed outline so they can see where to draw
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = '#cbd5e1'; // Light slate border
        ctx.lineWidth = 3;
        ctx.setLineDash([8, 8]);
        ctx.strokeText(template.name, w / 2, h - 80);
        
        ctx.setLineDash([]); // reset line dash
        if ('letterSpacing' in ctx) {
          (ctx as any).letterSpacing = '0px';
        }
      }
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const maskCanvas = maskCanvasRef.current;
    if (!canvas || !maskCanvas) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      // Only resize if different to avoid clearing canvas
      if (canvas.width !== rect.width || canvas.height !== rect.height) {
        // Save current contents if you wanted, but usually fine to clear on resize or restore
        const ctx = canvas.getContext('2d');
        const imgData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
        
        canvas.width = rect.width;
        canvas.height = rect.height;
        maskCanvas.width = rect.width;
        maskCanvas.height = rect.height;
        
        if (ctx && imgData) {
          ctx.putImageData(imgData, 0, 0);
        } else {
          clearCanvas();
        }
        removeTemplate(); // redraw template
      }
    };

    resizeCanvas(); // initial setup

    // Use resize observer to track parent or canvas changes
    const observer = new ResizeObserver(() => {
      resizeCanvas();
    });
    observer.observe(canvas);

    return () => observer.disconnect();
  }, []);

  const getCoordinates = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    
    let clientX, clientY;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const rect = canvas.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * canvas.width;
    const y = ((clientY - rect.top) / rect.height) * canvas.height;
    
    return { x, y };
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    isDrawingRef.current = true;
    setIsDrawing(true);
    const { x, y } = getCoordinates(e);
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.beginPath();
        ctx.moveTo(x, y);
      }
    }
  };

  const isDrawingRef = useRef(false);

  const stopDrawing = () => {
    isDrawingRef.current = false;
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.beginPath(); // Reset path
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Prevent scrolling
    if (e.cancelable) e.preventDefault();

    const { x, y } = getCoordinates(e);

    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = color;
    ctx.lineTo(x, y);
    ctx.stroke();
    // Do not begin a new path or moveTo here, just lineTo and stroke, 
    // it will smoothly connect lines.
  };

  const saveCanvas = () => {
    const canvas = canvasRef.current;
    const mask = maskCanvasRef.current;
    if (canvas && mask) {
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      const ctx = tempCanvas.getContext('2d');
      if (ctx) {
         ctx.fillStyle = '#ffffff';
         ctx.fillRect(0, 0, canvas.width, canvas.height);
         ctx.drawImage(canvas, 0, 0); // User's drawing
         if (activeTemplate) {
           ctx.drawImage(mask, 0, 0); // The mask (white base, holes and emoji) on top
         }
         const dataUrl = tempCanvas.toDataURL('image/png');
         const a = document.createElement('a');
         a.href = dataUrl;
         a.download = 'my_drawing.png';
         a.click();
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-20 px-4 pt-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/kids" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            <ArrowLeft size={24} className="text-gray-700" />
          </Link>
          <h1 className="text-3xl font-black text-gray-900">الرسم والتلوين</h1>
        </div>
        <div className="flex items-center gap-4">
           <button 
             onClick={clearCanvas}
             className="px-4 py-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 font-bold flex items-center gap-2"
           >
             <Trash2 size={20} />
             <span className="hidden sm:inline">مسح اللوحة</span>
           </button>
           <button 
             onClick={saveCanvas}
             className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 font-bold flex items-center gap-2"
           >
             <Download size={20} />
             <span className="hidden sm:inline">حفظ</span>
           </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-3xl border-4 border-gray-100 flex flex-col gap-4">
        <div className="flex items-center gap-4 overflow-x-auto pb-2">
          <button
             onClick={removeTemplate}
             className={`px-4 py-2 rounded-full font-bold whitespace-nowrap transition-colors flex items-center gap-2 ${
               !activeTemplate
                 ? 'bg-emerald-500 text-white shadow-md' 
                 : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100'
             }`}
          >
             <PaintBucket size={18} />
             رسم حر
          </button>
          <div className="w-px h-8 bg-gray-200 mx-2 flex-shrink-0"></div>
          {kidsGameLevels.map(level => (
            <button
              key={level.id}
              onClick={() => setSelectedCategory(level)}
              className={`px-4 py-2 rounded-full font-bold whitespace-nowrap transition-colors ${
                selectedCategory.id === level.id 
                  ? 'bg-blue-500 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {level.name}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4 overflow-x-auto pt-2 border-t-2 border-gray-50">
          <div className="flex items-center gap-2 text-gray-500 font-bold px-4 border-l-2">
             <ImageIcon size={24} />
             <span className="whitespace-nowrap">اختر صورة لتلوينها:</span>
          </div>
          {selectedCategory.data.map((t: any, idx: number) => (
            <button 
              key={idx}
              onClick={() => loadTemplate(t)}
              className={`flex-shrink-0 w-16 h-16 rounded-2xl border-2 text-3xl flex items-center justify-center transition-colors ${
                activeTemplate?.name === t.name 
                  ? 'border-blue-500 bg-blue-100 scale-110 shadow-sm' 
                  : 'bg-gray-50 border-gray-200 hover:border-blue-400 hover:bg-blue-50'
              }`}
            >
              {t.emoji}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-24 flex md:flex-col gap-4 bg-white p-4 rounded-3xl border-4 border-gray-100 justify-start overflow-x-auto">
           {colors.map(c => (
             <button
               key={c}
               onClick={() => setColor(c)}
               className={`w-12 h-12 flex-shrink-0 rounded-full border-4 transition-transform ${color === c ? 'scale-125 shadow-md border-gray-300' : 'border-transparent'}`}
               style={{ backgroundColor: c }}
             />
           ))}
           <div className="w-px md:w-full h-12 md:h-px bg-gray-200 my-2"></div>
           <button onClick={() => setBrushSize(4)} className={`w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full ${brushSize === 4 ? 'ring-2 ring-primary' : ''}`}><div className="w-2 h-2 bg-gray-800 rounded-full"></div></button>
           <button onClick={() => setBrushSize(12)} className={`w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full ${brushSize === 12 ? 'ring-2 ring-primary' : ''}`}><div className="w-4 h-4 bg-gray-800 rounded-full"></div></button>
           <button onClick={() => setBrushSize(24)} className={`w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full ${brushSize === 24 ? 'ring-2 ring-primary' : ''}`}><div className="w-8 h-8 bg-gray-800 rounded-full"></div></button>
        </div>

        <div className="flex-1 min-h-[600px] bg-white rounded-3xl border-4 border-gray-200 overflow-hidden shadow-sm relative touch-none">
          {/* User's Drawing Canvas */}
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseUp={stopDrawing}
            onMouseOut={stopDrawing}
            onMouseMove={draw}
            onTouchStart={startDrawing}
            onTouchEnd={stopDrawing}
            onTouchCancel={stopDrawing}
            onTouchMove={draw}
            className="w-full h-full absolute inset-0 cursor-crosshair block bg-[repeating-linear-gradient(transparent,transparent_39px,#e5e7eb_39px,#e5e7eb_40px)] z-10"
          />
          {/* Constrain Mask Layer */}
          <canvas
             ref={maskCanvasRef}
             className="w-full h-full absolute inset-0 pointer-events-none z-20"
          />
        </div>
      </div>
    </div>
  );
}
