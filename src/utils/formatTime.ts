export const formatTime = (isoString: string) =>
  new Date(isoString).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
