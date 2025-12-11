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

  useEffect(() => {
    initializePuzzle()
  }, [currentImage])

  useEffect(() => {
    if (isComplete && confetti.length === 0) {
      createConfetti()
    }
  }, [isComplete])

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
        <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
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
        <Card className="relative w-full max-w-2xl bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-3 sm:p-6 md:p-8 shadow-2xl">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 sm:right-4 sm:top-4 hover:bg-red-100"
            onClick={onClose}
          >
            <X className="h-4 w-4 text-red-500" />
          </Button>

          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <div className="text-center">
              <h2 className="font-black text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Arma el Puzzle
              </h2>
              <p className="mt-2 text-sm sm:text-base md:text-lg font-bold text-pink-600">{currentImage.name}</p>
            </div>

            {isComplete && (
              <div className="rounded-xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-4 sm:p-6 text-center text-white shadow-lg animate-bounce">
                <Trophy className="mx-auto h-10 w-10 sm:h-12 sm:w-12 mb-2" />
                <p className="font-black text-xl sm:text-2xl md:text-3xl">¡Felicitaciones!</p>
                <p className="text-sm sm:text-base md:text-lg font-bold">Lo resolviste en {moves} movimientos</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center">
              <Button
                onClick={initializePuzzle}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold shadow-lg text-sm sm:text-base"
              >
                <Shuffle className="mr-2 h-4 w-4" />
                Reiniciar
              </Button>
              <Button
                onClick={changeImage}
                className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-bold shadow-lg text-sm sm:text-base"
              >
                Cambiar Imagen
              </Button>
            </div>

            <div className="text-center text-base sm:text-lg md:text-xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
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
                          ? "border-pink-500 ring-2 ring-pink-400 scale-95 shadow-lg"
                          : "border-purple-200"
                      }
                      hover:border-blue-400 cursor-move hover:scale-[0.98] active:scale-95
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

            <div className="text-center text-xs sm:text-sm text-purple-600 font-semibold">
              Arrastra las piezas para intercambiarlas
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}
