export const DEV_BOX = {
  borderColor: 'red',
  borderWidth: 1,
};

export const LARGE_BUTTON_CONTENT = {
  height: 80,
  // width: '100%',
};

export const LARGE_BUTTON_TEXT = {
  fontSize: 20,
};

export const FORM_CONTROL_ROW_MT = 12;
export const FORM_CONTROL_ROW_HEIGHT = 62;

export const PANEL_BUTTON_PADDING = 6;
export const PANEL_BUTTON_L_PADDING = 12;
export const MENU_ICON_SIZE = 28;

export const FLEX_PAGE = (padding: number = 0) => {
  return {
    flex: 1,
    padding: padding,
  };
};

export const FORM_CONTROL_ROW = (height: number = FORM_CONTROL_ROW_HEIGHT) => {
  return {
    marginTop: FORM_CONTROL_ROW_MT,
    height: height,
  };
};
