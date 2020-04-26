// You can access any of the global GAS objects in this file. You can also
// import local files or external dependencies:
import { helloWorld } from "./example";

console.log(helloWorld);

// Simple Triggers: These five export functions are reserved export function names that are
// called by Google Apps when the corresponding event occurs. You can safely
// delete them if you won't be using them, but don't use the same export function names
// for anything else.
// See: https://developers.google.com/apps-script/guides/triggers

export function onOpen(
  e:
    | GoogleAppsScript.Events.DocsOnOpen
    | GoogleAppsScript.Events.SlidesOnOpen
    | GoogleAppsScript.Events.SheetsOnOpen
    | GoogleAppsScript.Events.FormsOnOpen
): void {
  console.log(e);
}

export function onEdit(e: GoogleAppsScript.Events.SheetsOnEdit): void {
  console.log(e);
}

export function onInstall(e: GoogleAppsScript.Events.AddonOnInstall): void {
  console.log(e);
}

export function doGet(e: GoogleAppsScript.Events.DoGet): void {
  console.log(e);
}

export function doPost(e: GoogleAppsScript.Events.DoPost): void {
  console.log(e);
}

global.onOpen = onOpen;
global.onEdit = onEdit;
global.onInstall = onInstall;
global.doPost = doPost;
global.doGet = doGet;
