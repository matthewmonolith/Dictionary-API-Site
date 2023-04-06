document.querySelector('button').addEventListener('click', getWord)

function getWord(){
  let word = document.querySelector('input').value
  word.split(" ").join("")
  let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
  fetch(url.concat(word))
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    let li = document.createElement('li')
    document.querySelector('ul').appendChild(li)
    while (document.querySelector('ul').firstChild) {
      document.querySelector('ul').removeChild(document.querySelector('ul').firstChild)
      }
    document.querySelector('h2').innerText = data[0].word
    data[0].meanings[0].definitions.forEach(element => {
      console.log(element.definition)
      let li = document.createElement('li')
      li.textContent = element.definition
      document.querySelector('ul').appendChild(li)
      li.style.fontSize = '2.5rem'
      li.style.width = '60%'
      li.style.margin = '10px 5px'
    })
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
}
