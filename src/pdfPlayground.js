import { modifyPdf } from "./formTemplates/baseTemplate.js";
import fs from 'fs';

fs.writeFileSync(`./documents/test.pdf`, await modifyPdf());;