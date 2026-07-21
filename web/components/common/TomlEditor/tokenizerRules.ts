// Keep escaped and unescaped branches disjoint to avoid exponential backtracking.
export const UNTERMINATED_BASIC_STRING_PATTERN = /"(?:\\.|[^"\\])*$/;
