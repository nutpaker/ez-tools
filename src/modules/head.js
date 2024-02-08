import Log from "./log";
import Setting from "../setting";
// import $ from 'jquery';

class Head {
    element;
    size;
    downloaded;
    seed;
    peer;
    progressBar = {
        all: 0,
        run: -1,
        template: $("<span>", { title: 'Direct source status.' })
    };

    constructor({ element, itemLength }) {
        this.element = element;
        this.progressBar.all = itemLength - 1;

        Log('Head...');
        Log('find index');

        let th = $("th", this.element).each((index, _th) => {
            if (_th.textContent.includes("ขนาด")) this.size = index;
            if (_th.textContent.includes("เสร็จ")) this.downloaded = index;
            if (_th.textContent.includes("ปล่อย")) this.seed = index;
            if (_th.textContent.includes("โหลด")) this.peer = index;
        })


        Log('add column cover');

        //add column
        if (Setting.preview === true) {
            $(th.get(0)).after(
                $("<th>", {
                    class: 'text-center dp-hide-3',
                    align: 'center',
                    width: '125px',
                    text: "รูป"
                }).append(this.progressBar.template)
            );
        }

        //touch first
        this.touchProgressBar();

        Log('Done');
    }

    touchProgressBar() {
        this.progressBar.run++;
        this.progressBar.template.html(` [ ${this.progressBar.run}/${this.progressBar.all}  ]`);

        Log('#', `touch progress bar ${this.progressBar.run}`);
    }
}

export default Head;