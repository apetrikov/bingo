type Phrase = {
  id: number, // unique
  text: string
}

type Cell = Phrase & {
  clicked: boolean,
  central: boolean,
  winner: boolean,
}