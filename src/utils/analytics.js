import { analytics } from "../config/firebase/firebase";
import { logEvent } from "firebase/analytics";

export function trackEvent(event) {
  logEvent(analytics, event);
}