function debounce(fn, wait, immediate = false) {
  let timer;
  return function(...args) {
    const ctx = this;
    clearTimeout(timer);
    if (immediate && !timer) {
      fn.apply(ctx, args);
    }
    timer = setTimeout(() => {
      if (!immediate) fn.apply(ctx, args);
      timer = null;
    }, wait);
  };
}
