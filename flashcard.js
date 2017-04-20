var ClozeCards = []
var BasicCards = []

function BasicCard(front, back){
  if (!(this instanceof BasicCard))
      return new BasicCard(front, back)
  this.front = front
  this.back = back
  BasicCards.push({
    front: this.front,
    back: this.back
  })
}

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
    console.error("shit's broke!");
  }
  var cutoff = this.cloze.length
  this.partial = '...' + this.fullText.slice(cutoff)
  ClozeCards.push({
    fullText: this.fullText,
    cloze: this.cloze,
    partial: this.partial
  })
}

var firstPresidentCloze = ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

console.log("firstPresidentCloze.fullText: " + firstPresidentCloze.fullText);
console.log("firstPresidentCloze.partial: " + firstPresidentCloze.partial);

var brokenCloze = ClozeCard(
    "George Washington was the first president of the United States.", "poop string");

console.log("brokenCloze.fullText: " + brokenCloze.fullText);
console.log(BasicCards)
