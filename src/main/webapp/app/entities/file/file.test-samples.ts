import { IFile, NewFile } from './file.model';

export const sampleWithRequiredData: IFile = {
  id: 35927,
};

export const sampleWithPartialData: IFile = {
  id: 42553,
  fileSize: 39428,
};

export const sampleWithFullData: IFile = {
  id: 41025,
  fileName: 'interface Producer XML',
  fileContent: '../fake-data/blob/hipster.png',
  fileContentContentType: 'unknown',
  fileSize: 17134,
  fileMimeType: 'intermediate Loan Track',
};

export const sampleWithNewData: NewFile = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
