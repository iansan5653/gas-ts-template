/**
 * All the simple triggers that will run automatically without installation.
 * These triggers must have the names provided or they won't be found.
 * @see https://developers.google.com/apps-script/guides/triggers
 */
type SimpleTriggers = {
  /**
   * Runs when a user opens a spreadsheet, document, presentation, or form that
   * the user has permission to edit.
   * @param e The event object that corresponds to the event.
   * Note: If you know for certain that your app will not be used in one of
   * Docs, Slides, Sheets, or Forms, you could delete the corresponding type(s)
   * to narrow down the type of `e`.
   * @template T Provide a more specific type hint for `e` if you know the
   * script will only every run in a certain Google Apps file type.
   */
  onOpen?: <
    T extends
      | GoogleAppsScript.Events.DocsOnOpen
      | GoogleAppsScript.Events.SlidesOnOpen
      | GoogleAppsScript.Events.SheetsOnOpen
      | GoogleAppsScript.Events.FormsOnOpen
  >(
    e: T
  ) => void;

  /**
   * Runs when a user changes a value in a spreadsheet.
   * Note: Only works in Sheets.
   * @param e The event object that corresponds to the event.
   */
  onEdit?: (e: GoogleAppsScript.Events.SheetsOnEdit) => void;

  /**
   * Runs when a user installs an add-on.
   * Note: Only works in add-ons.
   * @see https://developers.google.com/gsuite/add-ons/overview
   * @param e The event object that corresponds to the event.
   */
  onInstall?: (e: GoogleAppsScript.Events.AddonOnInstall) => void;

  /**
   * Runs when a program sends an HTTP POST request to a web app.
   * Note: Only works in web apps.
   * @see https://developers.google.com/apps-script/guides/web
   * @param e The event object that corresponds to the event.
   */
  doPost?: (e: GoogleAppsScript.Events.DoPost) => void;

  /**
   * Runs when a user visits a web app or a program sends an HTTP GET request to a
   * web app.
   * Note: Only works in web apps.
   * @see https://developers.google.com/apps-script/guides/web
   * @param e The event object that corresponds to the event.
   */
  doGet?: (e: GoogleAppsScript.Events.DoGet) => void;
};

/**
 * Installable triggers, which require manual or programmatic registration with
 * the app service.
 * @see https://developers.google.com/apps-script/guides/triggers/installable
 */
type InstallableTriggers = {
  /**
   * Any trigger function that will be attached to an installable trigger. You
   * must manually register these functions.
   * @param e The event object (exact type depends on the trigger).
   * @see https://developers.google.com/apps-script/guides/triggers/events
   * @template T The type of the event object. Use this to narrow the type of
   * `e` to the relevant event.
   */
  [key: string]: <
    T extends
      | GoogleAppsScript.Events.AppsScriptEvent
      | GoogleAppsScript.Events.AppsScriptHttpRequestEvent
  >(
    e: T
  ) => void;
};

/** Add functions to this object to expose them to Google Apps triggers. */
declare const global: SimpleTriggers & InstallableTriggers;
