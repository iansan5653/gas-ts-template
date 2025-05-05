// Import named functions
import { helloWorld } from "./example";

// Example export (for local development/testing, not required for GAS)
export { helloWorld };

// Trigger function: onOpen
function onOpen(
  e:
    | GoogleAppsScript.Events.DocsOnOpen
    | GoogleAppsScript.Events.SlidesOnOpen
    | GoogleAppsScript.Events.SheetsOnOpen
    | GoogleAppsScript.Events.FormsOnOpen
): void {
  console.log("onOpen triggered:", e);
}

// Trigger function: onEdit
function onEdit(e: GoogleAppsScript.Events.SheetsOnEdit): void {
  console.log("onEdit triggered:", e);
}

// Trigger function: onInstall
function onInstall(e: GoogleAppsScript.Events.AddonOnInstall): void {
  console.log("onInstall triggered:", e);
}

// Web app endpoint: GET
function doGet(): GoogleAppsScript.Content.TextOutput {
  return ContentService.createTextOutput("Hello from doGet!");
}

// Web app endpoint: POST
function doPost(e: GoogleAppsScript.Events.DoPost): void {
  console.log("doPost triggered:", e);
}

// Attach functions to globalThis for Apps Script to find them
(globalThis as any).onOpen = onOpen;
(globalThis as any).onEdit = onEdit;
(globalThis as any).onInstall = onInstall;
(globalThis as any).doGet = doGet;
(globalThis as any).doPost = doPost;

