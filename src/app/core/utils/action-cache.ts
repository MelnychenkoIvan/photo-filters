/**
 * Since every action label passes through this function if
 * is a good palce to ensure all of our action labels are unique
 */
const typeCache: { [lable: string]: boolean } = {};
export function type<T>(label: T | ''): T {
    if (typeCache[<string>label]) {
        throw new Error(`Action type "${label}" is not unique`);
    }

    typeCache[<string>label] = true;
    return <T>label;
}
