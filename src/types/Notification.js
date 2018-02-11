// @flow
export type Notification = {
  title: ?string,
  message: string,
  type: string,
  errorCode: ?number,
  displayType: mixed,

  // additional properties for SnackBar
  linkText: ?string,
  linkTarget: ?string,
};
