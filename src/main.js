import javascriptLogo from '@img/javascript'
import viteLogo from '@img/Vite'
import '@css/style'
import { setupCounter } from '@/components/counter'
import { client } from '@/components/StompClient'
import { sockClient } from '@/components/SockjsClient'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo" alt="Js logo" />
    </a>
    <h1>Hello Js-demo ☕</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      路漫漫其修远兮，吾将上下而求索。
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
// stompJs 组件库测试
sockClient();