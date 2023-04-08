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

export function renderMarkdown(markdownText = '') {
  const htmlText = markdownText
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
    .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
    .replace(/\*(.*)\*/gim, '<i>$1</i>')
    .replace(/!\[(.*?)\]\((.*?)\)/gim, '<img alt=\'$1\' src=\'$2\' />')
    .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href=\'$2\'>$1</a>')
    .replace(/`(.*?)`/gim, '<code>$1</code>')
    .replace(/\n$/gim, '<br />')

  return htmlText.trim()
}

export function renderCommitMessage(msg) {
  return renderMarkdown(msg)
    .replace(/\#([0-9]+)/g, '<a href=\'https://github.com/HydenLiu/type-challenges-docs/issues/$1\'>#$1</a>')
}

// 设置5位数的字符串
export function padNumber(number) {
  return String(number).padStart(5, '0')
}
