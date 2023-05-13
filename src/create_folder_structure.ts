import * as fs from "fs";
import * as path from "path";

interface FolderStructure {
  [folderName: string]: string | FolderStructure | null;
}

export function createFolderStructure(appName: string, folderStructure: string): void {
  const rootFolderName = Object.keys(JSON.parse(folderStructure))[0];
  const rootFolderPath = appName;
  create(rootFolderName, JSON.parse(folderStructure)[rootFolderName], rootFolderPath);
}

function create(
  folderName: string,
  folderStructure: FolderStructure | string | null,
  parentPath: string = ""
): void {
  const folderPath = path.join(parentPath, folderName);

  if (typeof folderStructure === "string") {
    fs.writeFileSync(`${folderPath}`, folderStructure);
  } else {
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }
    if (folderStructure === null) return;
    for (const [childFolderName, childFolderStructure] of Object.entries(folderStructure)) {
      create(childFolderName, childFolderStructure, folderPath);
    }
  }
}
