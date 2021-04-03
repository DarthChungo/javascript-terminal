export const commandNames = [
  "cat",
  "cd",
  "clear",
  "cp",
  "echo",
  "head",
  "history",
  "ls",
  "mkdir",
  "printenv",
  "pwd",
  "rm",
  "rmdir",
  "tail",
  "touch",
  "whoami",
  "img",
];

export default commandNames.reduce((mapping, commandName) => {
  return {
    ...mapping,
    [commandName]: {
      function: require(`commands/${commandName}`).default,
      optDef: require(`commands/${commandName}`).optDef,
    },
  };
}, {});
