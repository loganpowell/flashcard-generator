CREATE TABLE basiccards (
  id      INT PRIMARY KEY AUTO_INCREMENT,
  front   TEXT NOT NULL,
  back    TEXT NOT NULL
)

CREATE TABLE clozecards (
  id        INT PRIMARY KEY AUTO_INCREMENT,
  fulltxt  TEXT NOT NULL,
  cloze     TEXT NOT NULL,
  part   TEXT NOT NULL
)
