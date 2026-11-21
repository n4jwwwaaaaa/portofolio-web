import React, { useEffect, useRef, useState } from 'react';

interface DraggablePaperProps {
  children: React.ReactNode;
  baseRotation?: number;
  className?: string;
  resetSignal?: number;
  onMovedChange?: (id: string, isMoved: boolean) => void;
  dragId: string;
  hintText?: string;
  resetLabel?: string;
  resetButtonClassName?: string;
  hintClassName?: string;
  onCleanClick?: () => void;
  topZ: number;
  onBringToFront: () => number;
}

export const DraggablePaper: React.FC<DraggablePaperProps> = ({
  children,
  baseRotation = 0,
  className = '',
  resetSignal = 0,
  onMovedChange,
  dragId,
  hintText = 'Drag me!',
  resetLabel = '↺ reset',
  resetButtonClassName = '-top-3.5 right-3',
  hintClassName = '-top-6 left-3',
  onCleanClick,
  onBringToFront,
}) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(baseRotation);
  const [isDragging, setIsDragging] = useState(false);
  const [isSettling, setIsSettling] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMoved, setIsMoved] = useState(false);
  const [zIndex, setZIndex] = useState<number | undefined>(undefined);

  const elRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({
    pointerDown: false,
    dragging: false,
    startX: 0,
    startY: 0,
    initialX: 0,
    initialY: 0,
    lastX: 0,
  });

  // Sync global reset signal
  useEffect(() => {
    if (resetSignal === 0) return;
    setIsSettling(true);
    setPos({ x: 0, y: 0 });
    setRotation(baseRotation);
    setIsMoved(false);
    setZIndex(undefined);
    onMovedChange?.(dragId, false);
    const timer = window.setTimeout(() => setIsSettling(false), 380);
    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetSignal]);

  const handleReset = (e: React.MouseEvent | React.PointerEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsSettling(true);
    setPos({ x: 0, y: 0 });
    setRotation(baseRotation);
    setIsMoved(false);
    setZIndex(undefined);
    onMovedChange?.(dragId, false);
    window.setTimeout(() => setIsSettling(false), 380);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest('a') || target.closest('button[data-no-drag="true"]')) {
      return;
    }

    dragState.current = {
      pointerDown: true,
      dragging: false,
      startX: e.clientX,
      startY: e.clientY,
      initialX: pos.x,
      initialY: pos.y,
      lastX: e.clientX,
    };

    try {
      elRef.current?.setPointerCapture(e.pointerId);
    } catch {
      // Ignore pointer capture errors on synthetic events
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragState.current.pointerDown) return;

    const deltaX = e.clientX - dragState.current.startX;
    const deltaY = e.clientY - dragState.current.startY;
    const distance = Math.hypot(deltaX, deltaY);

    if (!dragState.current.dragging && distance > 6) {
      dragState.current.dragging = true;
      setIsDragging(true);
      setIsSettling(false);
      const nextZ = onBringToFront();
      setZIndex(nextZ);
    }

    if (dragState.current.dragging) {
      const nextX = dragState.current.initialX + deltaX;
      const nextY = dragState.current.initialY + deltaY;
      const velocityX = (e.clientX - dragState.current.lastX) * 0.4;
      dragState.current.lastX = e.clientX;
      const dynamicTilt = Math.max(-12, Math.min(12, baseRotation + velocityX));

      setPos({ x: nextX, y: nextY });
      setRotation(dynamicTilt);
    }
  };

  const handlePointerEnd = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragState.current.pointerDown) return;
    const wasDragging = dragState.current.dragging;
    dragState.current.pointerDown = false;
    dragState.current.dragging = false;

    try {
      elRef.current?.releasePointerCapture(e.pointerId);
    } catch {
      // Ignore
    }

    if (wasDragging) {
      setIsDragging(false);
      setIsSettling(true);
      const randomOffset = Math.random() * 4 - 2;
      const settledRot = Number((baseRotation + randomOffset).toFixed(2));
      setRotation(settledRot);

      const movedNow = Math.abs(pos.x) > 8 || Math.abs(pos.y) > 8;
      setIsMoved(movedNow);
      onMovedChange?.(dragId, movedNow);

      window.setTimeout(() => setIsSettling(false), 380);
    } else if (onCleanClick) {
      const target = e.target as HTMLElement;
      if (!target.closest('a') && !target.closest('button[data-no-drag="true"]')) {
        onCleanClick();
      }
    }
  };

  const computedTransform = isDragging
    ? `translate3d(${pos.x}px, ${pos.y}px, 0px) scale(1.03) rotate(${rotation}deg)`
    : isHovered
      ? `translate3d(${pos.x}px, ${pos.y - 6}px, 0px) scale(1.015) rotate(${baseRotation * 0.5}deg)`
      : `translate3d(${pos.x}px, ${pos.y}px, 0px) rotate(${rotation}deg)`;

  return (
    <div
      ref={elRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onPointerCancel={handlePointerEnd}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: computedTransform,
        zIndex: isDragging ? 90 : zIndex,
      }}
      className={`tactile-draggable group ${isDragging ? 'is-dragging' : ''} ${
        isSettling ? 'is-settling' : ''
      } ${className}`}
    >
      {/* Floating Drag Hint Badge on hover */}
      <div
        className={`pointer-events-none absolute z-30 bg-slate-900 text-yellow-300 font-pixel text-[9px] px-2 py-0.5 rounded shadow-sm border border-yellow-400 transition-all duration-150 whitespace-nowrap ${hintClassName} ${
          isHovered && !isDragging ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-1 scale-95'
        }`}
      >
        ✦ {hintText}
      </div>

      {/* Per-card Reset Button when moved */}
      {isMoved && (
        <button
          type="button"
          data-no-drag="true"
          onClick={handleReset}
          onPointerDown={(e) => e.stopPropagation()}
          title="Kembalikan ke posisi semula"
          className={`absolute z-30 bg-white text-slate-900 font-pixel text-[9px] px-2 py-0.5 rounded-full border-2 border-slate-900 shadow-hard-sm hover:bg-yellow-300 transition-colors whitespace-nowrap ${resetButtonClassName}`}
        >
          {resetLabel}
        </button>
      )}

      {children}
    </div>
  );
};
