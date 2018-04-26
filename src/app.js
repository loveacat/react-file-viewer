// Copyright (c) 2017 PlanGrid, Inc.

import 'styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import FileViewer from './components/file-viewer';
import sampleHouse from '../example_files/SampleHouse.wexbim';
import solarImage from '../example_files/02-USVI-Solar.jpg';
import docx from '../example_files/SampleSpec.docx';
import doc from '../example_files/sample.doc';
import csv from '../example_files/Total_Crime.csv';
import mp4 from '../example_files/small.mp4';
import xlsx from '../example_files/SimpleSpreadsheet.xlsx';
import photo360 from '../example_files/360photo.jpg';
import avi from '../example_files/drop.avi';
import webm from '../example_files/small.webm'
import mov from '../example_files/step.mov'
import mp3 from '../example_files/sample.mp3'
import rtf from '../example_files/sample.rtf';
import pdf from '../example_files/sample.pdf';

ReactDOM.render(
  <FileViewer
    fileType="pdf"
    filePath={"https://loupe-test-attach.s3.amazonaws.com/f59e6b30-7021-f26d-aad9-e79e3e7b3450.pdf?Signature=iemqKmi%2BGo2Mo51fn51NY7sIMac%3D&Expires=1524742774&AWSAccessKeyId=AKIAIR3SWRPFTGJZFW5A&response-content-disposition=attachment%3B%20filename%3D%22gridpaper.pdf%22"}
  />,
  window.document.getElementById('app')
);
