import * as data from '../samples.json';
import * as hasher from 'hasher';
import { routerInit } from './../router';

export class Sidebar {
    constructor(element) {
        this.element = element;
        this.init();
    }

    async init() {
        this.element.innerHTML = await this.fetchFile('src/common/sidebar/sidebar.html');
        let reportInfo = {
            reportViewer: {
                samples: data.default.ReportViewer.samples,
                prependHash: 'report-viewer/',
                target: document.getElementById('collapseReportViewer')
            },
            reportDesigner: {
                samples: data.default.ReportDesigner.samples,
                prependHash: 'report-designer/',
                target: document.getElementById('collapseReportDesigner')
            }
        }
        this.genrateTocItems( reportInfo.reportViewer.samples,reportInfo.reportViewer.prependHash, reportInfo.reportViewer.target);
        this.genrateTocItems( reportInfo.reportDesigner.samples,reportInfo.reportDesigner.prependHash, reportInfo.reportDesigner.target);
        let style = document.createElement('style');
        style.textContent = await this.fetchFile('src/common/sidebar/sidebar.css');
        this.element.appendChild(style);
        routerInit();
    }
    async fetchFile(path) {
        let response = await fetch(path);
        let data = await response.text();
        return data;
    }

    genrateTocItems(samples, prependHash, target) {
        samples.forEach((sample) => {
            let tocItem = document.createElement('div');
            tocItem.classList.add('ej-doc-list-item');
            tocItem.tabIndex = -1;
            tocItem.title = tocItem.textContent = sample.sampleName;
            tocItem.addEventListener('mousedown', this.onTocClick.bind({ prependHash: prependHash, sample: sample }));
            target.appendChild(tocItem);
        });
    }

    onTocClick() {
        hasher.setHash(this.prependHash + this.sample.routerPath);
    }
}