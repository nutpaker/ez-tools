import Head from "./modules/head"
import PassData from "./modules/pass-data";
import HookDetail from "./modules/hook-detail";
import Download from "./modules/download";
import Cover from "./modules/cover";
import Setting from "./setting";
import './template';

//working
if ([
    // '/viewno18.php',
    // '/viewbr.php',
    // '/upfinish.php',
    // '/viewno18sb.php',
    // '/viewbrsb.php',
    '/browse.php',
    '/browse18.php'
].includes(window.location.pathname)) {

    
let eHead = $('table > thead > tr');
let head = new Head({ element: eHead, itemLength: eHead.length });
let rows = [];

let tr = $('table > tbody > tr');

tr.each((index, item) => {

    let data = new PassData({ element: item, head });

    console.log(data);
    //hook detail
    data.hook = new HookDetail({
        data: data, hook: [
            { callback: Download.downloadedHook, self: data }
        ]
    });

    //cover
    let cover = new Cover({
        cover: data.cover,
        data,
    });

    // $(data.td.get(0)).after("<td></td>");
    // console.log(Setting.preview);
    //add column cover
    if (Setting.preview === true) {
        // $(data.td.get(0)).after("<td></td>");
        $(data.td.get(0)).after(cover.html);
    }

    // //button
    // let button = new Button({ data, cover });

    // //add column cover
    // $(data.td.get(1)).append(button.html);

    // //downloaded
    // if (Cache.downloaded[data.detailId] !== undefined) Download.downloaded({ data });

    // //remove bg first column
    // const columnColor = $(data.td.get(0)).attr('bgcolor');
    // if (!/^#[0-9A-F]{6}$/i.test(columnColor)) {
    //     $(data.td.get(0)).attr('bgcolor', '');
    // }

    //row
    rows.push({
        data: data,
        // cover: cover,
        // thank: thank,
        // button: button,
    });
})
}