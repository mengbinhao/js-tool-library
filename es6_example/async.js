async function sendXml(url) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url,
        type: 'GET',
        success: data =>  resolve(data),
        //if request fail
        //error: error => resolve(false)
        error: error => reject(error)
      })
    })
  }
  async function getNews(url) {
    let result = await sendXml(url);
    //handle reject
    if (!result) {
        console.log('xxxx')
        return
    }
    let result2 = await sendXml(url);
    console.log(result, result2);
  }
  getNews('http://localhost:3000/news?id=2')