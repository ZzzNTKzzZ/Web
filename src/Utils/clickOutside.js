export function clickOutside(element, callback) {
  function handleClick(event) {
    if (element && !element.contains(event.target)) {
      callback();
    }
  }

  document.addEventListener("mousedown", handleClick);

  return () => {
    document.removeEventListener("mousedown", handleClick);
  };
}