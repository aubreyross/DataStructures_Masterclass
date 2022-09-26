class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size)
  }

  _hash(string) {
    let result = 0
    const PRIME_NUMBER = 31;
    for (let i = 0; i < Math.min(string.length, 100); i++) {
      const char = string[i]
      const value = char.charCodeAt(0) - 96
      result = (result * PRIME_NUMBER + value) % this.keyMap.length
    }
    return result
  }

  get(key) {
    const position = this._hash(key)
    const hashTable = this.keyMap

    if (!hashTable[position]) return undefined

    for (let i = 0; i < hashTable[position].length; i++) {
      const itemKey = hashTable[position][i][0];

      if (itemKey === key) return hashTable[position][i][1]
    }

    return undefined
  }

  set(key, value) {
    const position = this._hash(key)

    const hashTable = this.keyMap

    hashTable[position] ?
      hashTable[position].push([key, value]) :
      hashTable[position] = [[key, value]]

    return this.keyMap
  }
}

const hashTable = new HashTable()

hashTable.set('maroon', '#800000')
hashTable.set('yellow', '#FFFF00')
hashTable.set('olive', '#808000')
hashTable.set('salmon', '#FA8072')
hashTable.set('lightcoral', '#F08080')
hashTable.set('mediumvioletred', '#C71585')
hashTable.set('plum', '#DDA0DD')

console.log(hashTable.get('salmon'))