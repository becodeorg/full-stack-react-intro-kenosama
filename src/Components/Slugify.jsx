const Slugify = (string) => {
  const newText = string
    .toLowerCase()
    .replace(/ /g, "_")
    .replace(/[^\w-]+/g, "");

  return newText;
};
export default Slugify;