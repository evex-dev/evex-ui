export function classMerge(...classes: (string | undefined | null)[]): string {
  const cleanedClass = new Set<string>();

  for (let i = 0, len = classes.length; i < len; i++) {
    const c = classes[i];
    if (!c) continue;
    const cls = c.split(" ");
    for (let j = 0, len2 = cls.length; j < len2; j++) {
      const cl = cls[j];
      if (cl !== "") cleanedClass.add(cl);
    }
  }

  return Array.from(cleanedClass).join(" ");
}
