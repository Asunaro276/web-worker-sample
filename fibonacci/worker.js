onmessage = function(event) {
  const n = event.data
  function fibonacci(n) {
    if (n <= 1) {
      return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
  const result = fibonacci(n)
  postMessage(result)
}
