import * as data from './samples.json';
import * as hasher from 'hasher';
import {
    onInit,
    updateData
} from './index';

let reportViewerHash = 'report-viewer/';
let reportDesignerHash = 'report-designer/';

let reportViewerSamples = data.default.ReportViewer.samples;
let reportDesignerSamples = data.default.ReportDesigner.samples
export function routerInit() {
    onInit();
    hasher.changed.add(hashHandler);
    hasher.initialized.add(hashHandler);
    hasher.init();
}

function getRouterDetails(hash) {
    let routerDetails = { isReportViewer: undefined, samples: undefined };
    if (hash.indexOf(reportViewerHash) !== -1) {
        routerDetails.isReportViewer = true;
        routerDetails.samples = reportViewerSamples.filter((sample) => (reportViewerHash + sample.routerPath) === hash)[0];
    } else {
        routerDetails.isReportViewer = false;
        routerDetails.samples = reportDesignerSamples.filter((sample) => (reportDesignerHash + sample.routerPath) === hash)[0];
    }
    return routerDetails;
}

function destroyControls() {
    let reportViewerElement = document.querySelector('.e-reportviewer.e-js');
    if (reportViewerElement) {
        let reportInstance = $(reportViewerElement).data('ejReportViewer');
        reportInstance.destroy();
    }
    let reportDesignerElement = document.querySelector('.e-reportdesigner.e-js');
    if (reportDesignerElement) {
        let reportInstance = $(reportDesignerElement).data('ejReportDesigner');
        reportInstance.destroy();
    }
}

function hashHandler(newHash, oldHash) {
    let sampleData;
    let isReportViewer;
    if (oldHash === undefined) { //initial loading
        if (newHash === '') {
            hasher.setHash(reportViewerHash + reportViewerSamples[0].routerPath);
            sampleData = reportViewerSamples[0];
            isReportViewer = true;
        } else {
            let routerDetails = getRouterDetails(newHash);
            sampleData = routerDetails.samples;
            isReportViewer = routerDetails.isReportViewer;
        }
    } else {
        if (newHash && oldHash) { //sample switching
            destroyControls();
            let routerDetails = getRouterDetails(newHash);
            sampleData = routerDetails.samples;
            isReportViewer = routerDetails.isReportViewer;
        }
    }
    if (!sampleData) {
        hasher.setHash(reportViewerHash + reportViewerSamples[0].routerPath);
    } else {
        updateData(sampleData, isReportViewer);
    }
}
