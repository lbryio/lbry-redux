import * as ACTIONS from 'constants/action_types';

export function doOpenModal(modal, modalProps = {}) {
  return {
    type: ACTIONS.OPEN_MODAL,
    data: {
      modal,
      modalProps,
    },
  };
}

export function doCloseModal() {
  return {
    type: ACTIONS.CLOSE_MODAL,
  };
}

export function doShowSnackBar(data) {
  return {
    type: ACTIONS.SHOW_SNACKBAR,
    data,
  };
}
