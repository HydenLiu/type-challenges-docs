export async function  fetchQuestions() {
  const res = await fetch('https://api.github.com/repos/type-challenges/type-challenges/contents/questions')
  const questions = await res.json()
  const list = questions.map(item => {
    const arr = item.name.split('-')
    const i = item.name.indexOf('-', 6)
    const name = item.name.slice(i + 1)

    return {
      // name转为大驼峰和空格分割
      
      name: name.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()),
      alias: name,
      number: parseInt(arr[0]),
      type: arr[1],
      // home_url: item.html_url,
      badge: '',
      describe: ''
    }
  })
  console.log('list',JSON.stringify(list, null, 2))
  return questions
}
