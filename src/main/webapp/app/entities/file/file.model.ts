export interface IFile {
  id: number;
  fileName?: string | null;
  fileContent?: string | null;
  fileContentContentType?: string | null;
  fileSize?: number | null;
  fileMimeType?: string | null;
}

export type NewFile = Omit<IFile, 'id'> & { id: null };
