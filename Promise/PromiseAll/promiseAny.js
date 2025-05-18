// Promise.any() takes an array of promises and:
// Resolves as soon as one of them fulfills
// Ignores all rejections
// Rejects only if all promises fail, with a special error: AggregateError