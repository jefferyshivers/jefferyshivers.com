import React from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';

import ResumePDF from '../assets/JefferyShivers.pdf';
import './resume.scss';

import { CustomEventInteraction, PageViewInteraction } from '../events';

const reportDownloadEvent = () => {
  new CustomEventInteraction({
    category: 'Downloads',
    action: 'Downloaded Resume'
  }).publish();
};

const DownloadButton = () => <button className="download" onClick={reportDownloadEvent}>
  <a href={ResumePDF} download="JefferyShivers">download as pdf</a>
</button>;

const PDFViewer = ({ onLoadSuccess, numPages }) => <div className="pdf-container">
  <Document
    file={ResumePDF}
    noData={null}
    onLoadSuccess={onLoadSuccess}
    className="pdf-document"
  >
    {[...Array(numPages)].map((_, index) => (
      <Page
        pageNumber={index + 1}
        renderAnnotationLayer={false}
        className="pdf-page" />
    ))}
  </Document>
</div>;

export default class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: 0
    };
    this.loadNumberOfPages = this.loadNumberOfPages.bind(this);
  }

  loadNumberOfPages({ numPages }) {
    this.setState({ numPages });
  };

  componentDidMount() {
    new PageViewInteraction({ path: window.location.pathname }).publish();
  }

  render() {
    return <React.Fragment>
      <DownloadButton />
      <PDFViewer
        onLoadSuccess={this.loadNumberOfPages}
        numPages={this.state.numPages} />
    </React.Fragment>
  };
};
