package main

import "fmt"

// Weapon interface
type Weapon interface {
	Fire() string
}

// Concrete weapon: Pistol
type Pistol struct{}

func (p *Pistol) Fire() string {
	return "Firing a pistol!"
}

// Decorator interface
type WeaponDecorator interface {
	Fire() string
}

// Concrete decorator: Suppressor
type Suppressor struct {
	weapon Weapon
}

func (s *Suppressor) Fire() string {
	return fmt.Sprintf("%s with suppressor!", s.weapon.Fire())
}

// Concrete decorator: ExtendedMag
type ExtendedMag struct {
	weapon Weapon
}

func (e *ExtendedMag) Fire() string {
	return fmt.Sprintf("%s with extended magazine!", e.weapon.Fire())
}

func main() {
	// Create a pistol
	pistol := &Pistol{}

	// Decorate the pistol with a suppressor
	suppressedPistol := &Suppressor{
		weapon: pistol,
	}

	// Decorate the suppressed pistol with an extended mag
	extendedMagPistol := &ExtendedMag{
		weapon: suppressedPistol,
	}

	// Fire the decorated pistol
	fmt.Println(extendedMagPistol.Fire()) // Output: Firing a pistol! with suppressor! with extended magazine!
}
