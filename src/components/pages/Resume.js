import React from 'react';
import { Document, Page } from 'react-pdf';

import samplePDF from './resume.PDF';

export default function Resume() {
  return (
    <Document file={samplePDF}>
      <Page pageNumber={1} />
    </Document>
  );
}
