export type NotificationState = string;

export type NotificationAction =
  | { type: 'SHOW_NOTIFICATION'; payload: string }
  | { type: 'HIDE_NOTIFICATION' };

const initialState: NotificationState = '';

export function notificationReducer(
  state: NotificationState = initialState,
  action: NotificationAction
): NotificationState {
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      return action.payload;
    case 'HIDE_NOTIFICATION':
      return '';
    default:
      return state;
  }
}
