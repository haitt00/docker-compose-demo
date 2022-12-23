import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IFile, NewFile } from '../file.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts IFile for edit and NewFileFormGroupInput for create.
 */
type FileFormGroupInput = IFile | PartialWithRequiredKeyOf<NewFile>;

type FileFormDefaults = Pick<NewFile, 'id'>;

type FileFormGroupContent = {
  id: FormControl<IFile['id'] | NewFile['id']>;
  fileName: FormControl<IFile['fileName']>;
  fileContent: FormControl<IFile['fileContent']>;
  fileContentContentType: FormControl<IFile['fileContentContentType']>;
  fileSize: FormControl<IFile['fileSize']>;
  fileMimeType: FormControl<IFile['fileMimeType']>;
};

export type FileFormGroup = FormGroup<FileFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class FileFormService {
  createFileFormGroup(file: FileFormGroupInput = { id: null }): FileFormGroup {
    const fileRawValue = {
      ...this.getFormDefaults(),
      ...file,
    };
    return new FormGroup<FileFormGroupContent>({
      id: new FormControl(
        { value: fileRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        }
      ),
      fileName: new FormControl(fileRawValue.fileName),
      fileContent: new FormControl(fileRawValue.fileContent),
      fileContentContentType: new FormControl(fileRawValue.fileContentContentType),
      fileSize: new FormControl(fileRawValue.fileSize),
      fileMimeType: new FormControl(fileRawValue.fileMimeType),
    });
  }

  getFile(form: FileFormGroup): IFile | NewFile {
    return form.getRawValue() as IFile | NewFile;
  }

  resetForm(form: FileFormGroup, file: FileFormGroupInput): void {
    const fileRawValue = { ...this.getFormDefaults(), ...file };
    form.reset(
      {
        ...fileRawValue,
        id: { value: fileRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */
    );
  }

  private getFormDefaults(): FileFormDefaults {
    return {
      id: null,
    };
  }
}
