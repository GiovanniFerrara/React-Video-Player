// Fake get request that returns a promise

export const _fetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(url), 2000)
  })
}