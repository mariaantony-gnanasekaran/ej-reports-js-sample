import * as jquery from 'jquery';
window['$'] = jquery;
import './index.css';

//report
import '@syncfusion/reporting-javascript/Scripts/reports/ej.report-viewer.min';
import '@syncfusion/reporting-javascript/Scripts/reports/ej.report-designer.min';

//data-visualization
import '@syncfusion/reporting-javascript/Scripts/reports/data-visualization/ej.bulletgraph.min';
import '@syncfusion/reporting-javascript/Scripts/reports/data-visualization/ej.chart.min';
import '@syncfusion/reporting-javascript/Scripts/reports/data-visualization/ej.circulargauge.min';
import '@syncfusion/reporting-javascript/Scripts/reports/data-visualization/ej.lineargauge.min';
import '@syncfusion/reporting-javascript/Scripts/reports/data-visualization/ej.map.min';

import 'bootstrap';

//code-mirror
import 'codemirror/lib/codemirror';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/sql-hint';
import 'codemirror/mode/sql/sql';
import 'codemirror/mode/vb/vb';

import * as CodeMirror from 'codemirror';
window['CodeMirror'] = CodeMirror;

import { Header } from './header/header';
import { Sidebar} from './sidebar/sidebar';
import * as data from './samples.json';

let header;
let reportViewer  = 'report-viewer';
let reportDesigner = 'report-designer';

document.addEventListener('DOMContentLoaded', function () {
    header = new Header(document.getElementsByTagName('ej-header')[0]);
    new Sidebar(document.getElementsByTagName('ej-sidebar')[0]);
}, false);

export function onInit() {
    document.querySelector(".splash").classList.add('e-hidden');
    document.querySelector('.ej-body.e-hidden').classList.remove('e-hidden');
    document.querySelector('.mobile-overlay').addEventListener('click', onMobileOverlayClick.bind(this));
    setReportsHeight();
    document.querySelector('.mobile-overlay').classList.add('e-hidden');
}

function setReportsHeight() {
    let style = document.getElementById('reports-style');
    if (!style) {
        style = document.createElement('style');
        style.id = 'reports-style';
        document.body.appendChild(style);
    }
    style.textContent = `ej-sample{
        display:block;
        overflow: hidden;
        height: ${window.innerHeight}px
      }`;
}

export function updateData(sampleData, isReportViewer) {
    tocSelection(sampleData, isReportViewer);
    updataSample(sampleData, isReportViewer);
    updateMetaData(sampleData);
}
export async function updataSample(sampleData, isReportViewer) {
    let dirName = isReportViewer ? reportViewer : reportDesigner;
    let demo = document.getElementsByTagName("ej-sample")[0];
    let html = await fetchFile(`src/controls/${dirName}/${sampleData.routerPath}/index.html`);
    let js = await fetchFile(`src/controls/${dirName}/${sampleData.routerPath}/index.js`);
    demo.innerHTML = html;
    eval(js);
}

window.addEventListener('resize', () => {
    setReportsHeight();
    updateOverlay();
});

function tocSelection(sampleData, isReportViewer) {
    let samples = isReportViewer ? data.default.ReportViewer.samples : data.default.ReportDesigner.samples;
    let tocClassName = isReportViewer ? 'collapseReportViewer' : 'collapseReportDesigner'
    let ele = document.querySelectorAll(`#${tocClassName} .ej-doc-list-item`)[samples.indexOf(sampleData)];
    let previousSelected = document.querySelector('.ej-doc-toc-selected');
    if (previousSelected) {
        previousSelected.classList.remove('ej-doc-toc-selected')
    }
    ele.classList.add('ej-doc-toc-selected');
    ele.focus();
}

async function fetchFile(path) {
    let response = await fetch(path);
    let data = await response.text();
    return data;
}

function updateOverlay() {
    let mobileOverlay = document.querySelector('.mobile-overlay');
    let mobileSideBar = document.querySelector('ej-sidebar');
    if (!window.matchMedia('(max-width:550px)').matches) {
        mobileSideBar.classList.remove('ej-doc-toc-mobile-slide-left');
        mobileOverlay.classList.add('e-hidden');
    }
}

function onMobileOverlayClick() {
    header.onHamBurgerClick();
}

function updateMetaData(sampleData) {
    var title = sampleData.metaData.title;
    if (!title) {
        title = sampleData.sampleName;
    }
    if (title.length <= 20) {
        document.title = `${title} | JavaScript Report | Syncfusion`;
    }
    else {
        document.title = `${title} | JavaScript Report`;
    }
    document.querySelector('meta[name="description"]').setAttribute('content', sampleData.metaData.description);
}