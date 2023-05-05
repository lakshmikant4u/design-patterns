package main

import (
	"sync"
)

type Game struct {
	// Game state variables go here
	Score int
}

var instance *Game
var once sync.Once

func GetInstance() *Game {
	once.Do(func() {
		instance = &Game{
			// Initialize game state variables here
			Score: 0,
		}
	})
	return instance
}

func main() {
	// Get the game instance
	game := GetInstance()

	// Set the game score to 100
	game.Score = 100

	// Get the game instance again
	game2 := GetInstance()

	if game == game2 {
		println("game and game2 are the same instance")
	}

	println("Game score:", game2.Score)
}
