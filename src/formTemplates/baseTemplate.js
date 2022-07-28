import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';

//UOM Points of PDF


function assessmentConstantForms( width, height,  font) {
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


export async function modifyPdf() {
  const filePath = './documents/OBE-FORM-05-INDIVIDUAL-PROGRAM-OUTCOME-ASSESSMENT-SE.pdf'
  const existingPdfBytes = fs.readFileSync(filePath);

  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];
  const { width, height } = firstPage.getSize();
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const assessmentConstantForm = new assessmentConstantForms( width, height, helveticaFont );

  firstPage.drawText('Juan Dela Cruz', assessmentConstantForm.studentName);
  firstPage.drawText('BSSE-2', assessmentConstantForm.courseYear);
  firstPage.drawText('SE-2225 - Project Management', assessmentConstantForm.subjectCodeDesc);
  firstPage.drawText('2nd Semester', assessmentConstantForm.semester);
  firstPage.drawText('2022', assessmentConstantForm.schoolYear);
  firstPage.drawText('PROJECT', assessmentConstantForm.assessmentTask);
  firstPage.drawText('07/28/2022', assessmentConstantForm.assessmentDate);
  firstPage.drawText('70', assessmentConstantForm.assessmentRating);
  firstPage.drawText('Passed', assessmentConstantForm.assessmentRemark);

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}
