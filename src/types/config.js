import {
  defaultToolbarControls,
  defaultToolbarControlsConfiguration,
} from "./editorToolbar";
import Paper from "@mui/material/Paper";

export const defaultConfig = {
  lang: "en",
  translations: {},
  draftEditor: {},
  editor: {
    wrapperElement: Paper,
    className: "",
    style: {},
  },
  toolbar: {
    className: "",
    style: {},
    visible: true,
    position: "top",
    controls: defaultToolbarControls,
    controlsConfig: defaultToolbarControlsConfiguration,
  },
};
