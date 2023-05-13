interface Folder {
  [name: string]: Folder | null | string;
}

export const cleanArchitectureFolderStructure: Folder = {
  appName: {
    data: {
      model: null,
      repository: null,
    },
    domain: {
      entities: null,
      exceptions: null,
      usecase: null,
    },
    infrastructure: {
      adapters: null,
      repository: null,
    },
    presentation: {
      resolvers: null,
      controllers: null,
      dto: {
        input: null,
        output: null,
      },
    },
    "appName.module.ts": "file",
  },
};
