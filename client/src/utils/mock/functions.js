// Fake get request that returns a promise

export const _fetch = (url) => {
  const otherUrl = prompt("Paste here the link of the video that you want to watch or  press enter for the default video");
  if (otherUrl) {
    url = otherUrl;
  }
  console.log(url)
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(url), 2000)
  })
}