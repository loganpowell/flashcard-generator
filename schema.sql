CREATE TABLE basiccards (
  id      INT PRIMARY KEY AUTO_INCREMENT,
  front   TEXT NOT NULL,
  back    TEXT NOT NULL
)

CREATE TABLE clozecards (
  id        INT PRIMARY KEY AUTO_INCREMENT,
  fulltext  TEXT NOT NULL,
  cloze     TEXT NOT NULL,
  partial   TEXT NOT NULL
)
