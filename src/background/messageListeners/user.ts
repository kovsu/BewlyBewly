import browser from 'webextension-polyfill'

export const setupUserMsgLstnr = () => {
  browser.runtime.onConnect.addListener(() => {
    browser.runtime.onMessage.addListener((message) => {
      if (message.contentScriptQuery === 'getUserInfo') {
        const url = 'https://api.bilibili.com/x/web-interface/nav'
        return fetch(url)
          .then(response => response.json())
          .then(data => (data))
          .catch(error => console.error(error))
      }

      if (message.contentScriptQuery === 'getUserStat') {
        const url = 'https://api.bilibili.com/x/web-interface/nav/stat'
        return fetch(url)
          .then(response => response.json())
          .then(data => (data))
          .catch(error => console.error(error))
      }
    })
  })
}