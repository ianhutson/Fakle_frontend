export default function () {
    let index = Math.floor(Math.random() * 10 - 4)
    if (index < 0) {
      return index * -1
    }
    return index
  }
  