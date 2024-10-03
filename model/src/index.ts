import { BlockModel, ImportFileHandle, InferOutputsType } from '@platforma-sdk/model';

export type BlockArgs = {
  title?: string;
  fastaFile?: ImportFileHandle;
  dataType: 'prot' | 'nucl';
};

export const model = BlockModel.create<BlockArgs>('Heavy')

  .initialArgs({
    title: 'Database',
    dataType: 'nucl'
  })

  .output('uploadProgress', (wf) => wf.outputs?.resolve('importHandle')?.getImportProgress())

  .output('db', (wf) => wf.outputs?.resolve('db')?.listInputFields())

  .output('log', (wf) => wf.outputs?.resolve('log')?.getLastLogs(100))

  .sections([{ type: 'link', href: '/', label: 'Main' }])

  .done();

export type BlockOutputs = InferOutputsType<typeof model>;
