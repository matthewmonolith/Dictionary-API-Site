document.querySelector('button').addEventListener('click', getWord)

function getWord(){
  let word = document.querySelector('input').value
  word.split(" ").join("")
  let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
  fetch(url.concat(word))
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    document.querySelector('h2').innerText = data[0].word
    document.querySelector('p').innerText = data[0].meanings[0].definitions[0].definition
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
}
