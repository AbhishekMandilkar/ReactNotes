function clipText(text) {
  if (text.length > 30) {
    return text.slice(0, 30) + "...";
  } else {
    return text;
  }
}
export default clipText;
