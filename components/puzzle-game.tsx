"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X, Shuffle, Trophy } from "lucide-react"

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
    src: "/um-cafe-brand-board.jpg",
    name: "Um Café",
  },
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

      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-2 sm:p-4">
        <Card className="relative w-full max-w-2xl bg-white p-3 sm:p-6 md:p-8 shadow-2xl border-4 border-[#059669]">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 sm:right-4 sm:top-4 hover:bg-red-100 z-10"
            onClick={onClose}
          >
            <X className="h-4 w-4 text-red-500" />
          </Button>

          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <div className="text-center pt-8 sm:pt-6">
              <h3 className="font-black text-xl sm:text-2xl md:text-3xl text-[#059669] mb-2">Agencia Cayumanque</h3>
              <h2 className="font-black text-2xl sm:text-3xl md:text-4xl text-[#2D5016]">Arma el Puzzle</h2>
              <p className="mt-2 text-sm sm:text-base md:text-lg font-bold text-[#059669]">{currentImage.name}</p>
            </div>

            {showCongrats && (
              <div className="rounded-xl bg-gradient-to-br from-[#059669] to-[#2D5016] p-4 sm:p-6 text-center text-white shadow-lg animate-bounce">
                <div className="mb-3 flex justify-center">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 100 100"
                    className="sm:w-24 sm:h-24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="50" cy="50" r="45" fill="white" />
                    <text x="50" y="65" fontSize="40" fill="#059669" fontWeight="bold" textAnchor="middle">
                      C
                    </text>
                  </svg>
                </div>
                <Trophy className="mx-auto h-10 w-10 sm:h-12 sm:w-12 mb-2" />
                <p className="font-black text-xl sm:text-2xl md:text-3xl">¡Felicitaciones!</p>
                <p className="text-sm sm:text-base md:text-lg font-bold mb-2">Lo resolviste en {moves} movimientos</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center">
              <Button
                onClick={initializePuzzle}
                className="bg-[#059669] hover:bg-[#047857] text-white font-bold shadow-lg text-sm sm:text-base"
              >
                <Shuffle className="mr-2 h-4 w-4" />
                Reiniciar
              </Button>
              <Button
                onClick={changeImage}
                className="bg-[#2D5016] hover:bg-[#1F3910] text-white font-bold shadow-lg text-sm sm:text-base"
              >
                Cambiar Imagen
              </Button>
            </div>

            <div className="text-center text-base sm:text-lg md:text-xl font-black text-[#059669]">
              Movimientos: {moves}
            </div>

            <div
              className="mx-auto grid gap-0.5 sm:gap-1"
              style={{
                gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
                maxWidth: "min(90vw, 500px)",
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
                      aspect-square overflow-hidden rounded-md border-2 transition-all
                      ${
                        draggedPiece === index
                          ? "border-[#2D5016] ring-2 ring-[#2D5016] scale-95 shadow-lg"
                          : "border-[#059669]"
                      }
                      hover:border-[#2D5016] cursor-move hover:scale-[0.98] active:scale-95
                    `}
                    style={{
                      backgroundImage: `url(${currentImage.src})`,
                      backgroundSize: `${gridSize * 100}%`,
                      backgroundPosition: `${(col * 100) / (gridSize - 1)}% ${(row * 100) / (gridSize - 1)}%`,
                    }}
                  />
                )
              })}
            </div>

            <div className="text-center text-xs sm:text-sm text-[#059669] font-semibold">
              Arrastra las piezas para intercambiarlas
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}
