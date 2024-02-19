import { analytics } from "../config/firebase/firebase";

export function trackEvent(event) {
  analytics.logEvent(event);
}