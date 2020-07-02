// https://github.com/benmosher/eslint-plugin-import/issues/1699
// eslint-disable-next-line import/named
import { dxSchedulerAppointment } from '../../../ui/scheduler';
/* eslint-disable-next-line import/named */
import { dxPromise } from '../../../core/utils/deferred';

export type Color = string | undefined;
export type DeferredColor = dxPromise<Color>;

export type AppointmentItem = {
  data: dxSchedulerAppointment;
  currentData?: dxSchedulerAppointment;
  settings?: AppointmentItemSettings;
  color?: DeferredColor;
};
export type AppointmentItemSettings = {
  targetedAppointmentData?: dxSchedulerAppointment;
  originalAppointmentStartDate?: Date;
  originalAppointmentEndDate?: Date;
  startDate?: Date;
  endDate?: Date;
  direction?: 'vertical' | 'horizontal';
  allDay?: boolean;
  isCompact?: boolean;
  virtual?: boolean;
  groupIndex?: number;
  appointmentReduced?: boolean;
  sortedIndex?: number;
};
export type FormattedContent = {
  text: string;
  formatDate: string;
};
