import { useEffect } from "react";
import { Toaster, sileo } from "sileo";
import "sileo/styles.css";

const SILEO_NOTIFICATION_TYPE = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
  ACTION: "action",
} as const;

type SileoNotificationType = (typeof SILEO_NOTIFICATION_TYPE)[keyof typeof SILEO_NOTIFICATION_TYPE];

const SILEO_TOASTER_POSITION = {
  TOP_CENTER: "top-center",
} as const;

type SileoToasterPosition = (typeof SILEO_TOASTER_POSITION)[keyof typeof SILEO_TOASTER_POSITION];

interface SileoNotificationDetail {
  type?: SileoNotificationType;
  title: string;
  description?: string;
  fill?: string;
}

interface SileoProviderProps {
  position?: SileoToasterPosition;
}

declare global {
  interface DocumentEventMap {
    "sileo:notify": CustomEvent<SileoNotificationDetail>;
  }
}

function isSileoNotificationType(value: unknown): value is SileoNotificationType {
  return typeof value === "string" && Object.values(SILEO_NOTIFICATION_TYPE).includes(value as SileoNotificationType);
}

function notifySileo({ type = SILEO_NOTIFICATION_TYPE.SUCCESS, title, description = "", fill }: SileoNotificationDetail) {
  if (!title) return;

  const notification = { title, description, fill };
  const notificationType = isSileoNotificationType(type) ? type : SILEO_NOTIFICATION_TYPE.SUCCESS;

  switch (notificationType) {
    case SILEO_NOTIFICATION_TYPE.ERROR:
      sileo.error(notification);
      break;
    case SILEO_NOTIFICATION_TYPE.WARNING:
      sileo.warning(notification);
      break;
    case SILEO_NOTIFICATION_TYPE.INFO:
      sileo.info(notification);
      break;
    case SILEO_NOTIFICATION_TYPE.ACTION:
      sileo.action(notification);
      break;
    case SILEO_NOTIFICATION_TYPE.SUCCESS:
    default:
      sileo.success(notification);
      break;
  }
}

export default function SileoProvider({ position = SILEO_TOASTER_POSITION.TOP_CENTER }: SileoProviderProps) {
  useEffect(() => {
    const handleNotification = (event: CustomEvent<SileoNotificationDetail>) => {
      notifySileo(event.detail);
    };

    document.addEventListener("sileo:notify", handleNotification);

    return () => {
      document.removeEventListener("sileo:notify", handleNotification);
    };
  }, []);

  return <Toaster position={position} />;
}
