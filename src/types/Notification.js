// @flow
export type Notification = {
  id: ?string,
  title: ?string,
  message: string,
  type: string,
  error: ?string,
  displayType: mixed,

  // additional properties for SnackBar
  linkText: ?string,
  linkTarget: ?string,
};

// Used for retreiving data from redux store
export type NotificationProps = {
  uri: ?string,
  url: ?string,
};
