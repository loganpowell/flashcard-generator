var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'telotism',
  database: 'flashcardsdb'
})

connection.connect(function(err) {
  if (err) throw err
  console.log('connection as id: ' + connection.threadID)
})

function BasicCard(front, back){
  if (!(this instanceof BasicCard))
      return new BasicCard(front, back)
  this.front = front
  this.back = back
  var card = {
    front: this.front,
    back: this.back
  }
  var query = connection.query('insert into basiccards set ?', card, function(err, res) {
    if (err) {
      console.error(err)
      return
    }
    console.error(res)
  })
}
//
var firstPresident = BasicCard(
    "Who was the first president of the United States?", "George Washington")

console.log(firstPresident.front)

function ClozeCard(text, cloze){
  if (!(this instanceof ClozeCard)) {
    return new ClozeCard(text, cloze)
  }
  this.fullText = text
  this.cloze = cloze
  var matcher = new RegExp(this.cloze)
  if (!this.fullText.match(matcher)) {
    console.error("No matching closer! Shit's broke!");
  }
  var cutoff = this.cloze.length
  this.partial = '...' + this.fullText.slice(cutoff)
  var card = {
    fulltxt: this.fullText,
    cloze: this.cloze,
    part: this.partial
  }
  var query = connection.query('insert into clozecards set ?', card, function(err, res) {
    if (err) {
      console.error(err)
      return
    }
    console.error(res)
  })
}

var firstPresidentCloze = ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

var brokenCloze = ClozeCard(
    "George Washington was the first president of the United States.", "poop string");


console.log("firstPresidentCloze.fullText: " + firstPresidentCloze.fullText);
console.log("firstPresidentCloze.partial: " + firstPresidentCloze.partial);
console.log("brokenCloze.fullText: " + brokenCloze.fullText);
