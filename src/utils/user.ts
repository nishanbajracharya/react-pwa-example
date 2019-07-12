export function getName(firstName: string = '', lastName: string = ''): string {
  return `${firstName} ${lastName}`.trim();
}
