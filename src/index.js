import { app, h } from 'hyperapp' // eslint-disable-line

export default app({
  state: 'hello world',
  view: state => <div>{state}</div>,
  root: document.getElementById('root')
})
