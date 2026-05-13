export type SecurityEvent = {
  action: string;
  detail?: string;
  clientId?: string;
};

export const logSecurityEvent = ({ action, detail, clientId }: SecurityEvent): void => {
  const prefix = '[security]';
  const message = [prefix, action, clientId ? `client=${clientId}` : '', detail ?? '']
    .filter(Boolean)
    .join(' ');
  console.warn(message);
};
