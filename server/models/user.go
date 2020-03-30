package models

import (
	"encoding/json"
	"time"

	"github.com/gobuffalo/nulls"
	"github.com/gobuffalo/pop"
	"github.com/gobuffalo/validate"
	"github.com/gobuffalo/validate/validators"
	"github.com/gofrs/uuid"
)

// User is used by pop to map your .model.Name.Proper.Pluralize.Underscore database table to your go code.
type User struct {
	ID               uuid.UUID    `json:"id" db:"id"`
	Name             string       `json:"name" db:"name" form:"name"`
	Email            string       `json:"email" db:"email" form:"email"`
	Bio              nulls.String `json:"bio" db:"bio" form:"bio"`
	Age              int          `json:"age" db:"age" form:"age"`
	Avatar           string       `json:"avatar" db:"avatar" form:"avatar"`
	Gender           string       `json:"gender" db:"gender" form:"gender"`
	GenderPreference string       `json:"gender_preference" db:"gender_preference" form:"gender_preference"`
	AgePreference    int          `json:"age_preference" db:"age_preference" form:"age_preference"`
	Location         string       `json:"location" db:"location" form:"location"`
	CreatedAt        time.Time    `json:"created_at" db:"created_at"`
	UpdatedAt        time.Time    `json:"updated_at" db:"updated_at"`
}

// String is not required by pop and may be deleted
func (u User) String() string {
	ju, _ := json.Marshal(u)
	return string(ju)
}

// Users is not required by pop and may be deleted
type Users []User

// String is not required by pop and may be deleted
func (u Users) String() string {
	ju, _ := json.Marshal(u)
	return string(ju)
}

// Validate gets run every time you call a "pop.Validate*" (pop.ValidateAndSave, pop.ValidateAndCreate, pop.ValidateAndUpdate) method.
// This method is not required and may be deleted.
func (u *User) Validate(tx *pop.Connection) (*validate.Errors, error) {
	return validate.Validate(
		&validators.StringIsPresent{Field: u.Name, Name: "Name"},
		&validators.EmailLike{Field: u.Email, Name: "Email"},
		&validators.IntIsPresent{Field: u.Age, Name: "Age"},
		&validators.StringIsPresent{Field: u.Avatar, Name: "Avatar"},
		&validators.StringIsPresent{Field: u.Gender, Name: "Gender"},
		&validators.StringIsPresent{Field: u.GenderPreference, Name: "GenderPreference"},
		&validators.IntIsPresent{Field: u.AgePreference, Name: "AgePreference"},
		&validators.StringIsPresent{Field: u.Location, Name: "Location"},
	), nil
}

// ValidateCreate gets run every time you call "pop.ValidateAndCreate" method.
// This method is not required and may be deleted.
func (u *User) ValidateCreate(tx *pop.Connection) (*validate.Errors, error) {
	return validate.NewErrors(), nil
}

// ValidateUpdate gets run every time you call "pop.ValidateAndUpdate" method.
// This method is not required and may be deleted.
func (u *User) ValidateUpdate(tx *pop.Connection) (*validate.Errors, error) {
	return validate.NewErrors(), nil
}
