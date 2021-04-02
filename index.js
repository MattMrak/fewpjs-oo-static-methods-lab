class Formatter {
  //add static methods here
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }
  static sanitize(str){
    str = str.replace(/[^a-zA-Z0-9'\. -]/g, '')
    return str
  }
  static titleize(str){
    const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    str = str[0].toUpperCase() + str.slice(1)
    const array = str.split(" ")
    for(let n = 0; n < array.length; n++){
      if(!(exceptions.includes(array[n]))){
        array[n] = array[n][0].toUpperCase() + array[n].slice(1)
      }
    }
    return array.join(" ")
  }
}