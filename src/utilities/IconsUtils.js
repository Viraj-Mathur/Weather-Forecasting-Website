
// to dynamically load and use images to display weather icons

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

// parameter represents the current filename, while the index parameter represents the index of the current item in the array.
  // to remove the leading "./" from the filename.
  //  to obtain a clean key for the images object.


export function weatherIcon(imageName) {
  const allWeatherIcons = importAll(
    require.context('../assets/icons', false, /\.(png)$/)
  );


  // /\.(png)$/ is used to match only PNG image files. 
  // The result of this import is stored in the allWeatherIcons constant.

  
  const iconsKeys = Object.keys(allWeatherIcons);

  const iconsValues = Object.values(allWeatherIcons);
  const iconIndex = iconsKeys.indexOf(imageName);

  return iconsValues[iconIndex];
}
