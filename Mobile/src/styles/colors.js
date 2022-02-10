let colors = light;

const light = {
  // Fonts
  fontLight: "#fff",
  fontDark: "#000",
  fontAlert: "#d11507",
  // Buttons
  buttonExit: "#cd3c30",
  borderButtonExit: "#6b1212",
  buttonSubmit: "#0A8553",
  buttonOther: "#1827AD",
  borderButtonOther: "#090F43",
  buttonUpdate: "#e67409",
  // Backgrounds
  background: "#0A8553",
  backgroundText: "#404040",
  backgroundLight: "#fff",
  backgroundDark: "#000",
  // Others
  divider: "#888",
  itemBackground: "#c2c2c2",
  itemBorder: "#888",
  borderInput: "#0A8553",
};

const dark = {
  fontLight: "#0D1117",
  fontDark: "#fff",
  fontAlert: "#ff5232",
  buttonExit: "#a43026",
  borderButtonExit: "#6b1212",
  buttonSubmit: "#138a39",
  borderButtonSubmit: "#126b12",
  buttonOther: "#131f8a",
  buttonUpdate: "#b85d07",
  backgroundText: "#333333",
  backgroundLight: "#0D1117",
  backgroundDark: "#fff",
  borderInput: "#777",
  divider: "#777",
  background: "#FFC000",
  itemBackground: "#c2c2c2",
  itemBorder: "#888",
};

true ? (colors = light) : (colors = dark);

export default colors;
