const generateRandomColour = () => {
  let values = "0123456789ABCDEF";
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += values[Math.floor(Math.random() * 16)];
  }
  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
  };
  //Change the background colour
  document.body.style.background = hex;
  //Change text of hex value
  document.getElementById("hex").innerHTML = "Hex code: " + hex;
  document.getElementById("rgb").innerHTML = "rgb(" + hexToRgb(hex) + ")";
};
