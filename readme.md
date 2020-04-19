# Google Apps & TypeScript Project Template

This repository provides a simple template to start a new
[Google Apps Script](https://developers.google.com/apps-script) project with
TypeScript. Building, linting, formatting, and pushing to Google Apps are all
built in.

## Getting Started

1. Install Node.js.
2. Click "Use This Template" in GitHub to start a new repository. Clone your new
   repo and open a terminal in the local directory.
3. Install all of the dependencies by running `npm install`.
4. Start a new Google Apps Script project by going to
   https://script.google.com/home and clicking "New Project". You can also start
   a project tied directly to a specific Google Apps file by opening the file
   and clicking "Tools" -> "Script Editor".
5. Click "File" -> "Project Properties" in the Google Apps Script editor. Enter
   a project name if prompted to, then on the "Info" tab in the "Project
   Properties" window, find and copy the "Script ID".
6. Replace "SCRIPT_ID" in `.clasp.json` with your project's ID.
7. Add your TypeScript code in the `src` folder. Note that unlike in a normal
   Google Apps Script project, only what is imported into the `index.ts` file
   will be compiled into the script, and all files must be in the `src` folder
   (except external dependencies).
8. Optional: lint your code with `npm run lint` and/or auto-format your code
   with `npm run format`. Typically you will want to install the ESLint and/or
   Prettier extensions in your preferred code editor.
9. Compile the TypeScript files into a single JavaScript file and push it to
   Google Apps by running `npm run push`.
