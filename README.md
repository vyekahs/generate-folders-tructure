# Generate Folder Structure Extension

The **Generate Folder Structure** is an extension for Visual Studio Code that automatically generates folder structures based on the `folder_structure.json` file within the selected folder.

## Description

The _Generate Folder Structure_ extension is designed to simplify the process of creating commonly used folder structures in application development. Users can define the desired folder structure in the `folder_structure.json` file, and when the extension is triggered, it automatically generates the specified structure within the selected folder. This eliminates the need for manual folder creation, saving time and effort during project setup.

## Features

- **Automatic Folder Structure Generation**: The extension reads the `folder_structure.json` file and creates the corresponding folder structure within the selected folder.
- **Customizable Folder Structure**: Users can define and modify the folder structure by editing the `folder_structure.json` file according to their project requirements.
- **Visual Feedback**: Once the folder structure is generated, the extension provides visual feedback to indicate the successful completion of the operation.

## Usage

1. Open Visual Studio Code and navigate to your workspace.
2. "Create a `folder_structure.json` file in the root folder of your workspace where you want to generate the folder structure."
3. Define the desired folder structure within the `folder_structure.json` file. Here's an example structure:

```json
{
  "src": {
    "components": null,
    "pages": null,
    "utils": null
  },
  "public": {
    "assets": null,
    "index.html": ""
  }
}
```

4. Save the `folder_structure.json` file.
5. Right-click on the desired folder in the workspace.
6. From the context menu, select "Generate Folder Structure".
7. The extension will read the `folder_structure.json` file and create the corresponding folders and files within the selected folder.
8. Once the folder structure is generated, you can navigate to the selected folder and verify the created structure.

The Generate Folder Structure extension simplifies the process of creating folder structures, saving you time and effort in setting up your project directories. By leveraging the power of the `folder_structure.json` file, you can quickly generate standardized folder structures tailored to your project needs.

This extension was created by chatGPT.
