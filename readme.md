# Google Apps & TypeScript Project Template

This repository provides a simple template to start a new
[Google Apps Script](https://developers.google.com/apps-script) project with
TypeScript. Building, linting, formatting, and pushing to Google Apps are all
built in.

The project is set up with a TypeScript configuration that transforms your
TypeScript files in the `src` directory into JavaScript files in the `build`
directory. It's not enought to upload those files as-is to Google Apps, however,
because Apps Script doesn't support installing and running dependencies, and
uploaded files are run in random order - they aren't linked together at all. To
solve this problem, a second build step uses Webpack to combine all files and
depdendencies into a single minified `Code.js` file, which is the only file that
is actually pushed to Google Apps.

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
   Google Apps by running `npm run push`. Log in to Google if prompted.

## Available Scripts

You can run the following scripts by opening the project directory in your
terminal (as long as you have Node & npm installed):

- `npm install` Install all required dependencies.
- `npm run build` Build your project to ensure it compiles properly.
- `npm run format` Format your code automatically using Prettier.
- `npm run lint` Check your code for common errors using ESLint.
- **`npm run push` Build your project and push it to Google Apps in one step.**
  The first time you run this, you will be prompted to log in to your Google
  account.

## Included Files

- `src` This is where you'll put all your TypeScript files.
  - `example.ts` Gives an example of how to export something from a local file.
  - `index.ts` Provides you with the five basic triggers prebuilt, as well as an
    example of how to import from a local file.
- `.clasp.json` Provides the configuration for Clasp, the command-line tool
  which pushes code to Google Apps Script.
- `.claspignore` Tells Clasp to ignore every file except for `Code.js`,
  `appscript.json`, and `readme_appscript.md`.
- `.gitignore` Tells Git to ignore output files and `node_modules`.
- `.prettierrc` Configures Prettier, the code formatter.
- `appscript.json` Controls the project setup and Apps Script environment. You
  can change the exception logger, but don't change the runtime version.
- `package.json` Lists the project dependencies and scripts.
- `readme_appscript.md` If anyone opens your project in the Apps Script editor,
  they'll just see a jumbled file. This note helps them realize that the project
  should be edited outside of that environment.
- `readme.md` This file.
- `tsconfig.json` Configures the TypeScript compiler to enable strict mode and
  compile to CommonJS modules from the `src` folder to the `build` folder.
- `webpack.config.js` Configures Webpack to take files from the `build` folder
  and dependencies and merge them all into a single `Code.js` file.
