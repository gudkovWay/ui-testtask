export function checkExtenshion(name: string) {
  const tsxSource = "fileTsx";
  const jsSource = "fileJs";
  const fileSource = "file";
  const extenshion = name.split('.').at(-1);

  if (extenshion === 'js') {
    return jsSource;
  } else if (extenshion === 'tsx') {
    return tsxSource;
  } else {
    return fileSource;
  }
}
