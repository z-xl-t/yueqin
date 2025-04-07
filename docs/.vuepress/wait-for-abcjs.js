export const waitForAbcjs = async function () {
  while (!window.abcjs) {
    await sleep(100)
  }
  window.abcjs = abcjs
}

export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
