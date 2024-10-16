import { BlockModel, ImportFileHandle, InferOutputsType } from '@platforma-sdk/model';

export type BlastAlphabetType = 'prot' | 'nucl';

export type BlockArgs = {
  title?: string;
  fastaFile?: ImportFileHandle;
  dataType: BlastAlphabetType;
};

export const model = BlockModel.create<BlockArgs>()

  .initialArgs({
    title: 'Database',
    dataType: 'nucl'
  })

  .argsValid((ctx) => ctx.args.fastaFile !== undefined)

  .output('importProgress', (wf) => wf.outputs?.resolve('fastaHandle')?.getImportProgress())

  .output('db', (wf) => wf.outputs?.resolve('db')?.listInputFields())

  .output('log', (wf) => wf.outputs?.resolve('log')?.getLastLogs(100))

  .sections([{ type: 'link', href: '/', label: 'Main' }])

  .done();

export type BlockOutputs = InferOutputsType<typeof model>;
