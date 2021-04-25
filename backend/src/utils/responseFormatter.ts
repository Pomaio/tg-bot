interface FormatterOptions {
    excludedKeys?: string[];
    value: Record<string, unknown>
}

export const responseFormatter = ({ value, excludedKeys = [] }: FormatterOptions) => {
    return Object.keys(value)
        .filter(k => !excludedKeys.includes(k))
        .reduce((acc, cur) => ({ ...acc, [cur]: value[cur] }), {})
};
