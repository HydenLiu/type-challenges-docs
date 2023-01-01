export default {
  '/typescript-challenges/': getTcSidebar(),
  '/utility-types/': getUtSidebar()
}

function getTcSidebar() {
  return [
    {
      text: 'T1',
      collapsible: true,
      items: [
        {
          text: 'test',
          link: '/typescript-challenges/'
        },
      ]
    }
  ]
}

function getUtSidebar() {
  return [
    {
      text: 'U1',
      items: [
        {
          text: 'test1',
          link: '/utility-types/'
        },
        {
          text: 'test2',
          link: '/utility-types/test2'
        }
      ]
    }
  ]
}
