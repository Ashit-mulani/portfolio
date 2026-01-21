export function useTruncate(label: string, maxLength = 16) {
  return label.length > maxLength ? label.slice(0, maxLength) + "..." : label;
}
