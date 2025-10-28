import {
  changeLayoutAction,
  changeLayoutContentWidthAction,
  changeLayoutModeAction,
  changeLayoutSemiDarkAction,
  changeLayoutSidebarSizeAction,
  changeLeftSidebarColorTypeAction,
  changeSkinAction
} from './reducer';
import { changeHTMLAttribute } from './utils';

/**
 * Changes the layout type
 * @param {*} param0
 */
export const changeLayout = (layout: any) => async (dispatch: any) => {
  try {
    // if (layout === "twocolumn") {
    //     document.documentElement.removeAttribute("data-layout-width");
    // } else if (layout === "horizontal") {
    //     document.documentElement.removeAttribute("data-sidebar-size");
    // }
    changeHTMLAttribute('data-layout', layout);
    dispatch(changeLayoutAction(layout));
  } catch (error) {}
};

/**
 * Changes the left Semi Dark (Sidebar & Header)
 * @param {*} param0
 */
export const changeLayoutSemiDark =
  (sidebarTheme: any) => async (dispatch: any) => {
    try {
      changeHTMLAttribute('data-topbar', sidebarTheme);
      dispatch(changeLayoutSemiDarkAction(sidebarTheme));
    } catch (error) {
      console.log(error);
    }
  };

/**
 * Changes the Layout Skin Theme
 * @param {*} param0
 */
export const changeSkin = (skinTheme: any) => async (dispatch: any) => {
  try {
    changeHTMLAttribute('data-skin', skinTheme);
    dispatch(changeSkinAction(skinTheme));
  } catch (error) {
    console.log(error);
  }
};

/**
 * Changes the layout mode
 * @param {*} param0
 */
export const changeLayoutMode = (layoutMode: any) => async (dispatch: any) => {
  try {
    changeHTMLAttribute('data-mode', layoutMode);
    dispatch(changeLayoutModeAction(layoutMode));
  } catch (error) {}
};

/**
 * Changes the Content width
 * @param {*} param0
 */
export const changeLayoutContentWidth =
  (contectWidth: any) => async (dispatch: any) => {
    try {
      changeHTMLAttribute('data-content', contectWidth);
      dispatch(changeLayoutContentWidthAction(contectWidth));
    } catch (error) {
      console.log(error);
    }
  };

/**
 * Changes the left sidebar size
 * @param {*} param0
 */
export const changeLeftsidebarSizeType =
  (leftsidebarSizetype: any) => async (dispatch: any) => {
    try {
      switch (leftsidebarSizetype) {
        case 'lg':
          changeHTMLAttribute('data-sidebar-size', 'lg');
          break;
        case 'md':
          changeHTMLAttribute('data-sidebar-size', 'md');
          break;
        case 'sm':
          changeHTMLAttribute('data-sidebar-size', 'sm');
          break;
        default:
          changeHTMLAttribute('data-sidebar-size', 'lg');
      }
      dispatch(changeLayoutSidebarSizeAction(leftsidebarSizetype));
    } catch (error) {
      console.log(error);
    }
  };

/**
 * Changes the Sidebar Color
 * @param {*} param0
 */
export const changeLeftSidebarColorType =
  (sidebarColor: any) => async (dispatch: any) => {
    try {
      changeHTMLAttribute('data-sidebar', sidebarColor);
      dispatch(changeLeftSidebarColorTypeAction(sidebarColor));
    } catch (error) {
      console.log(error);
    }
  };
