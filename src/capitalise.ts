const capitalise = (word: string): string => {
  //   let tempString: string = "";
  //   //   tempString = word.slice(0, 1);
  //   //   tempString.toUpperCase();
  //   tempString = word.slice(0, 1).toUpperCase() + word.slice(1);
  //   console.log(tempString);
  return word.slice(0, 1).toUpperCase() + word.slice(1);
};
export default capitalise;
