const DOMAIN = 'https://a.com/'

function request(url, data, method) {
  url = DOMAIN + url
  method = !method ? 'GET' : method.toUpperCase()
  let _data = {}
  if (method === 'POST') {
    _data = {
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
      method,
    }
  } else {
    if (!!data) {
      let params = []
      Object.keys(data).forEach(key => {
        params.push(key + '=' + data[key])
        if (url.search(/\?/) === -1) {
          url += '?' + params.join('&')
        } else {
          url += '&' + params.join('&')
        }
      })
    }
  }
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(url, _data)
      let res
      if (_data.method === 'DELETE') {
        res = response.text()
      } else {
        res = response.json()
      }
      resolve(res)
    } catch (e) {
      reject(e)
    }
  })
}

export default request