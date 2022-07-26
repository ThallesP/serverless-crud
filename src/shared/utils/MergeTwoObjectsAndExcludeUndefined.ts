export function MergeTwoObjectsAndExcludeUndefined<K>(
  target: any,
  source: any
): K {
  Object.keys(source).forEach(
    (key) => source[key] === undefined && delete source[key]
  );

  Object.assign(target, source);

  return target as K;
}
