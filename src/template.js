import './styles/tamplate.scss';
// import "@fancyapps/ui/dist/fancybox.css";
// import "@fancyapps/ui";
import Setting from "./setting";
//preview cover
let previewCover = 'img.preview{max-height:' + Setting.previewMaxHeight + 'px;max-width:' + Setting.previewMaxWidth + 'px;}';

GM_addStyle(previewCover);