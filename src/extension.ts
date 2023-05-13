import * as vscode from "vscode";
import * as fs from "fs";
import { createFolderStructure } from "./create_folder_structure";

interface Folder {
  [name: string]: Folder | null | string;
}

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "extension.generateFolderStructure",
    async (uri: vscode.Uri) => {
      const appName = await vscode.window.showInputBox({
        prompt: "Enter the application name",
        placeHolder: "MyApp",
      });
      if (!appName) {
        return;
      }

      const workspaceFolders = vscode.workspace.workspaceFolders;
      if (!workspaceFolders) {
        vscode.window.showErrorMessage("No workspace folder opened");
        return;
      }

      let path;
      let workspacePath;
      if (!uri) {
        const folderUris = workspaceFolders.map((folder) => {
          return {
            label: folder.name,
            folderPath: folder.uri.fsPath,
          };
        });
        const selectedFolder = await vscode.window.showQuickPick(folderUris, {
          placeHolder: "Select a folder inside the workspace",
        });
        if (!selectedFolder) {
          vscode.window.showErrorMessage("Not selectedFolder folder opened");
          return;
        }
        path = selectedFolder?.folderPath;
        workspacePath = selectedFolder?.folderPath;
      } else {
        path = uri.fsPath;
        workspacePath = vscode.workspace.getWorkspaceFolder(uri)?.uri.fsPath;
      }

      if (!path) {
        vscode.window.showErrorMessage("Not found path");
        return;
      }

      let predefinedFolderStructure: Folder | null = null;
      try {
        const foldersJSON = fs.readFileSync(`${workspacePath}/folder_structure.json`, "utf-8");
        predefinedFolderStructure = JSON.parse(foldersJSON);
      } catch (e) {
        vscode.window.showErrorMessage("Not found folder_structure.json");
        return;
      }

      if (!predefinedFolderStructure) {
        vscode.window.showErrorMessage("folder_structure.json is empty");
        return;
      }

      const updatedFolderStructure = JSON.parse(
        JSON.stringify(predefinedFolderStructure).replace(/appName/g, appName)
      );
      try {
        createFolderStructure(path, JSON.stringify(updatedFolderStructure));
      } catch (error) {
        vscode.window.showErrorMessage("Exited unexpectedly.");
        return;
      }
      vscode.window.showInformationMessage("Folder structure created successfully");
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
