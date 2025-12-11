"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X, Shuffle, Trophy } from "lucide-react"
import Image from "next/image"

interface PuzzlePiece {
  id: number
  correctPosition: number
  currentPosition: number
}

interface Confetti {
  id: number
  x: number
  y: number
  color: string
  rotation: number
  scale: number
  velocity: { x: number; y: number }
}

const PUZZLE_IMAGES = [
  {
    src: "/brinda-logo-purple-illustrations.jpg",
    name: "BRINDA",
  },
  {
    src: "/quinchamali-pattern-black.jpg",
    name: "Quinchamalí",
  },
  {
    src: "/longaniza-layout-map.jpg",
    name: "Fiesta de la Longaniza",
  },
]

const CONFETTI_COLORS = ["#FF6B6B", "#4ECDC4", "#FFE66D", "#95E1D3", "#F38181", "#AA96DA", "#FCBAD3", "#A8E6CF"]

export default function PuzzleGame({ onClose }: { onClose: () => void }) {
  const [gridSize] = useState(3)
  const [pieces, setPieces] = useState<PuzzlePiece[]>([])
  const [draggedPiece, setDraggedPiece] = useState<number | null>(null)
  const [isComplete, setIsComplete] = useState(false)
  const [moves, setMoves] = useState(0)
  const [currentImage, setCurrentImage] = useState(PUZZLE_IMAGES[0])
  const [confetti, setConfetti] = useState<Confetti[]>([])
  const [showCongrats, setShowCongrats] = useState(false)

  useEffect(() => {
    initializePuzzle()
  }, [currentImage])

  useEffect(() => {
    if (isComplete && confetti.length === 0) {
      createConfetti()
      setShowCongrats(true)
      const timer = setTimeout(() => {
        setShowCongrats(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [isComplete, confetti.length])

  useEffect(() => {
    if (confetti.length > 0) {
      const interval = setInterval(() => {
        setConfetti((prev) =>
          prev
            .map((c) => ({
              ...c,
              x: c.x + c.velocity.x,
              y: c.y + c.velocity.y,
              rotation: c.rotation + 5,
              velocity: {
                x: c.velocity.x,
                y: c.velocity.y + 0.5, // gravedad
              },
            }))
            .filter((c) => c.y < window.innerHeight + 50),
        )
      }, 20)
      return () => clearInterval(interval)
    }
  }, [confetti])

  const createConfetti = () => {
    const newConfetti: Confetti[] = []
    for (let i = 0; i < 100; i++) {
      newConfetti.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -50 - Math.random() * 500,
        color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
        rotation: Math.random() * 360,
        scale: 0.5 + Math.random() * 1,
        velocity: {
          x: (Math.random() - 0.5) * 4,
          y: Math.random() * 3 + 2,
        },
      })
    }
    setConfetti(newConfetti)
  }

  const initializePuzzle = () => {
    const totalPieces = gridSize * gridSize
    const newPieces: PuzzlePiece[] = []

    for (let i = 0; i < totalPieces; i++) {
      newPieces.push({
        id: i,
        correctPosition: i,
        currentPosition: i,
      })
    }

    const shuffled = [...newPieces]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = shuffled[i].currentPosition
      shuffled[i].currentPosition = shuffled[j].currentPosition
      shuffled[j].currentPosition = temp
    }

    setPieces(shuffled)
    setIsComplete(false)
    setMoves(0)
    setDraggedPiece(null)
    setConfetti([])
    setShowCongrats(false)
  }

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    setDraggedPiece(index)
    e.dataTransfer.effectAllowed = "move"
    e.dataTransfer.setData("text/html", index.toString())
    ;(e.target as HTMLElement).style.opacity = "0.5"
  }

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    ;(e.target as HTMLElement).style.opacity = "1"
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = "move"
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, dropIndex: number) => {
    e.preventDefault()

    if (draggedPiece === null || draggedPiece === dropIndex) {
      setDraggedPiece(null)
      return
    }

    const newPieces = [...pieces]
    const temp = newPieces[draggedPiece].currentPosition
    newPieces[draggedPiece].currentPosition = newPieces[dropIndex].currentPosition
    newPieces[dropIndex].currentPosition = temp

    setPieces(newPieces)
    setDraggedPiece(null)
    setMoves(moves + 1)

    checkCompletion(newPieces)
  }

  const checkCompletion = (currentPieces: PuzzlePiece[]) => {
    const complete = currentPieces.every((piece) => piece.correctPosition === piece.currentPosition)
    setIsComplete(complete)
  }

  const changeImage = () => {
    const currentIndex = PUZZLE_IMAGES.findIndex((img) => img.src === currentImage.src)
    const nextIndex = (currentIndex + 1) % PUZZLE_IMAGES.length
    setCurrentImage(PUZZLE_IMAGES[nextIndex])
  }

  return (
    <>
      {confetti.length > 0 && (
        <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
          {confetti.map((c) => (
            <div
              key={c.id}
              className="absolute"
              style={{
                left: `${c.x}px`,
                top: `${c.y}px`,
                transform: `rotate(${c.rotation}deg) scale(${c.scale})`,
                width: "12px",
                height: "12px",
                backgroundColor: c.color,
                borderRadius: "2px",
              }}
            />
          ))}
        </div>
      )}

      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2 md:p-4">
        <Card className="relative w-full max-w-[95vw] md:max-w-5xl h-auto md:h-[500px] bg-white shadow-2xl border-2 border-primary/20 rounded-3xl flex flex-col md:flex-row overflow-hidden">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 md:right-3 md:top-3 hover:bg-red-100 z-50 rounded-full"
            onClick={onClose}
          >
            <X className="h-4 w-4 md:h-5 md:w-5 text-red-500" />
          </Button>

          <div className="w-full md:w-[350px] flex flex-col justify-center items-center p-4 md:p-6 space-y-3 md:space-y-4 bg-white z-10">
            <div className="text-center">
              <div className="inline-block mb-2 md:mb-3">
                <Image
                  src="/cayumanque-full-logo.jpg"
                  alt="Cayumanque Logo"
                  width={80}
                  height={80}
                  className="object-contain md:w-[120px] md:h-[120px]"
                />
              </div>
              <h3 className="font-black text-sm md:text-base text-primary mb-1">Agencia Cayumanque</h3>
              <h2 className="font-black text-2xl md:text-3xl text-fuchsia-600 mb-1 md:mb-2">Arma el Puzzle</h2>
              <p className="text-xs md:text-sm font-bold text-primary/80">{currentImage.name}</p>
            </div>

            {showCongrats && (
              <div className="rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-secondary p-3 md:p-4 text-center text-white shadow-2xl animate-bounce border-4 border-white">
                <Trophy className="mx-auto h-8 w-8 md:h-10 md:w-10 mb-2 drop-shadow-lg" />
                <p className="font-black text-lg md:text-xl mb-1">¡Felicitaciones!</p>
                <p className="text-xs md:text-sm font-bold mb-2">Lo resolviste en {moves} movimientos</p>
                <div className="pt-2 border-t border-white/30">
                  <p className="text-xs font-semibold">Hecho por Agencia Cayumanque</p>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-2 w-full">
              <Button
                onClick={initializePuzzle}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-xs md:text-sm rounded-xl py-2"
              >
                <Shuffle className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                Reiniciar
              </Button>
              <Button
                onClick={changeImage}
                className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-xs md:text-sm rounded-xl py-2"
              >
                Cambiar Imagen
              </Button>
            </div>

            <div className="text-center">
              <div className="inline-block bg-primary/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                <span className="text-sm md:text-base font-black text-primary">
                  Movimientos: <span className="text-secondary">{moves}</span>
                </span>
              </div>
            </div>

            <div className="text-center bg-primary/5 py-1.5 md:py-2 px-2 md:px-3 rounded-xl">
              <p className="text-xs text-primary font-bold">Arrastra las piezas para intercambiarlas</p>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center p-4 md:p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
            <div
              className="grid bg-white/80 rounded-2xl shadow-2xl p-1.5 md:p-2"
              style={{
                gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
                width: "min(90vw, 350px)",
                height: "min(90vw, 350px)",
                maxWidth: "350px",
                maxHeight: "350px",
                gap: "1px",
              }}
            >
              {pieces.map((piece, index) => {
                const row = Math.floor(piece.currentPosition / gridSize)
                const col = piece.currentPosition % gridSize

                return (
                  <div
                    key={piece.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragEnd={handleDragEnd}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, index)}
                    className={`
                      relative overflow-hidden rounded-lg border-2 transition-all duration-200
                      ${
                        draggedPiece === index
                          ? "border-secondary ring-2 ring-secondary/50 scale-95 shadow-2xl z-10"
                          : "border-primary/40"
                      }
                      hover:border-primary hover:shadow-lg cursor-move hover:scale-[0.98] active:scale-95
                      touch-none
                    `}
                    style={{
                      backgroundImage: `url(${currentImage.src})`,
                      backgroundSize: `${gridSize * 100}%`,
                      backgroundPosition: `${(col * 100) / (gridSize - 1)}% ${(row * 100) / (gridSize - 1)}%`,
                      aspectRatio: "1",
                    }}
                  />
                )
              })}
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}
