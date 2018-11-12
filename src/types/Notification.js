// @flow
import * as ACTIONS from 'constants/action_types';

/*
  Toasts:
    - First-in, first-out queue
    - Simple messages that are shown in response to user interactions
    - Never saved
    - If they are the result of errors, use the isError flag when creating
    - For errors that should interrupt user behavior, use Error
*/
export type ToastParams = {
  message: string,
  title?: string,
  linkText?: string,
  linkTarget?: string,
  isError?: boolean,
};

export type Toast = {
  id: string,
  params: ToastParams,
};

export type DoToast = {
  type: ACTIONS.CREATE_TOAST,
  data: Toast,
};

/*
  Events:
    - List of notifications based on user interactions/app events
    - Always saved, but can be manually deleted
    - Can happen in the background, or because of user interaction (ex: publish confirmed)
*/
export type Event = {
  id: string, // Unique id
  dateCreated: number,
  isRead: boolean, // Used to display "new" notifications that a user hasn't seen yet
  source?: string, // The type/area an event is from. Used for sorting (ex: publishes, transactions)
  // We may want to use priority/isDismissed in the future to specify how urgent a notification is
  // and if the user should see it immediately
  // isDissmied: boolean,
  // priority?: number
};

export type DoEvent = {
  type: ACTIONS.CREATE_EVENT,
  data: Event,
};

export type DoEditEvent = {
  type: ACTIONS.EDIT_EVENT,
  data: {
    id: string,
    isRead: boolean,
    // In the future we can add `isDismissed` if we decide to show notifications as they come in
    // Similar to Facebook's notifications in the corner of the screen
    // isDismissed: boolean,
  },
};

export type DoDeleteEvent = {
  type: ACTIONS.DELETE_EVENT,
  data: {
    id: string, // The id to delete
  },
};

/*
  Errors:
    - First-in, first-out queue
    - Errors that should interupt user behavior
    - For errors that can be shown without interrupting a user, use Toast with the isError flag
*/
export type Error = {
  title: string,
  text: string,
};

export type DoError = {
  type: ACTIONS.CREATE_ERROR,
  data: Error,
};

export type DoDismissError = {
  type: ACTIONS.DISMISS_ERROR,
};

/*
  NotificationState
*/
export type NotificationState = {
  events: Array<Event>,
  errors: Array<Error>,
  toasts: Array<Toast>,
};
