import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';

//UOM Points of PDF

//this represents the locations and details needed for generating
function assessmentFormProps( width, height,  font) {
  this.studentName = {
    x: 200,
    y: height - 276,
    size: 12,
    font: font,
  };

  this.courseYear = {
    x: 494,
    y: height - 276,
    size: 12,
    font: font,
  };

  this.subjectCodeDesc = {
    x: 223,
    y: height - 302,
    size: 12,
    font: font,
  };

  this.semester = {
    x: 128,
    y: height - (288 + 7 * 6),
    size: 12,
    font: font,
  },

  this.schoolYear = {
    x: 432,
    y: height - (288 + 7 * 6),
    size: 12,
    font: font,
  };

  this.assessmentTask = {
    x: 144 + 7 * 3,
    y: height - 357,
    size: 12,
    font: font,
  };

  this.assessmentDate = {
    x: 434 + 7 * 3,
    y: height - 357,
    size: 12,
    font: font,
  };

  this.assessmentRating = {
    x: 72 + 7 * 7,
    y: height - (360 + 7 * 3),
    size: 12,
    font: font,
  };

  this.assessmentRemark = {
    x: 360 + 7 * 8,
    y: height - (360 + 7 * 3),
    size: 12,
    font: font,
  };
};

function assessmentInputProps() {
  this.studentName = 'Juan Dela Cruz';
  this.courseYear = 'BSSE-2';
  this.subjectCodeDesc = 'se-2225';
  this.semester = '2nd semester';
  this.schoolYear = '2021-2022';
  this.assessmentTask = 'Project';
  this.assessmentDate = (new Date(Date.now())).toISOString().substring(0, 10);
  this.assessmentRating = '70';
  this.assessmentRemark = 'Passed';
}

class Template {
  filePath;
  pages;
  font;
  pdfBytes;
  pdfDoc;
  firstPage;
  width;
  height;
  formProps;
  inputProps;

  constructor(filePath) {
    this.filePath = filePath;
    this.existingPdfBytes = fs.readFileSync(this.filePath);
  }

  async init() {
    this.pdfDoc = await PDFDocument.load(this.existingPdfBytes);
    this.pages = this.pdfDoc.getPages();
    this.firstPage = this.pages[0];
    const { width, height } = this.firstPage.getSize();
    this.font = await this.pdfDoc.embedFont(StandardFonts.Helvetica);
    this.formProps = new assessmentFormProps( width, height, this.font );
    this.inputProps = new assessmentInputProps();
  }
  
  
  async generateFirstPageInputs() {
    const formKeys = Object.keys(this.formProps);
    const inputsKeys = Object.keys(this.inputProps)
    for (let i = 0; i < 9; i++) {
      this.firstPage.drawText( this.inputProps[inputsKeys[i]] , this.formProps[formKeys[i]] );
    }
    this.pdfBytes = await this.pdfDoc.save();
  }

  get pdfBytes() {
    return this.pdfBytes;
  }
}




export async function modifyPdf() {
  const example = new Template('./documents/po-form-5-se.pdf');
  await example.init();
  await example.generateFirstPageInputs();
  return example.pdfBytes;
}
