// You can access any of the global GAS objects in this file. You can also
// import local files or external dependencies:
import { helloWorld } from "./example";

console.log(helloWorld);

// Simple Triggers: These five export functions are reserved export function names that are
// called by Google Apps when the corresponding event occurs. You can safely
// delete them if you won't be using them, but don't use the same export function names
// for anything else.
// See: https://developers.google.com/apps-script/guides/triggers

/**
 * Runs when a user opens a spreadsheet, document, presentation, or form that
 * the user has permission to edit.
 * @param e The event object that corresponds to the event.
 * Note: If you know for certain that your app will not be used in one of Docs,
 * Slides, Sheets, or Forms, you could delete the corresponding type(s) to
 * narrow down the type of `e`.
 */
export function onOpen(
  e:
    | GoogleAppsScript.Events.DocsOnOpen
    | GoogleAppsScript.Events.SlidesOnOpen
    | GoogleAppsScript.Events.SheetsOnOpen
    | GoogleAppsScript.Events.FormsOnOpen
): void {
  console.log(e);
}

/**
 * Runs when a user changes a value in a spreadsheet.
 * Note: Only works in Sheets.
 * @param e The event object that corresponds to the event.
 */
export function onEdit(e: GoogleAppsScript.Events.SheetsOnEdit): void {
  console.log(e);
}

/**
 * Runs when a user installs an add-on.
 * Note: Only works in addons.
 * @see https://developers.google.com/gsuite/add-ons/overview
 * @param e The event object that corresponds to the event.
 */
export function onInstall(e: GoogleAppsScript.Events.AddonOnInstall): void {
  console.log(e);
}

/**
 * Runs when a user visits a web app or a program sends an HTTP GET request to a
 * web app.
 * Note: Only works in web apps.
 * @see https://developers.google.com/apps-script/guides/web
 * @param e The event object that corresponds to the event.
 */
export function doGet(e: GoogleAppsScript.Events.DoGet): void {
  console.log(e);
}

/**
 * Runs when a program sends an HTTP POST request to a web app.
 * Note: Only works in web apps.
 * @see https://developers.google.com/apps-script/guides/web
 * @param e The event object that corresponds to the event.
 */
export function doPost(e: GoogleAppsScript.Events.DoPost): void {
  console.log(e);
}
