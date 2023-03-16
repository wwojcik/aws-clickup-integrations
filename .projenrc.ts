import {
  CodeOfConduct,
  Contributors,
  Recommended,
} from "@mountainpass/cool-bits-for-projen";
import { nx_monorepo } from "aws-prototyping-sdk";
import { IniFile } from "projen";
const project = new nx_monorepo.NxMonorepoProject({
  defaultReleaseBranch: "main",
  devDeps: ["aws-prototyping-sdk", "@mountainpass/cool-bits-for-projen"],
  name: "aws-clickup-integrations",
  authorEmail: "wojtaswojcik@gmail.com",
  authorName: "Wojciech Wójcik",
  github: true,
  autoApproveUpgrades: true,
  gitignore: [".nx/cache"],
  autoApproveOptions: {
    allowedUsernames: ["wwojcik", "dependabot[bot]", "github-actions"],
    secret: "GITHUB_TOKEN",
  },
  ...Recommended.defaultProjectOptions,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});

const recommender = new Recommended(project, {});
recommender.vscodeExtensionRecommendations.addRecommendations(
  "editorconfig.editorconfig"
);

new CodeOfConduct(project, {
  contactMethod: "email: wojtaswojcik@gmail.com",
});

new Contributors(project, {
  autoPopulateFromGit: false,
  contributors: true,
  additionalContributors: ["Wojciech Wójcik <wojtaswojcik@gmail.com>"],
});
new IniFile(project, ".editorconfig", {
  obj: {
    ["root"]: true,
    ["*"]: {
      ["end_of_line"]: "lf",
      ["charset"]: "utf-8",
      ["insert_final_newline"]: true,
      ["trim_trailing_whitespace"]: true,
    },
    ["*.{js,ts}"]: {
      ["indent_style"]: "space",
      ["indent_size"]: 2,
      ["max_line_length"]: 120,
    },
    ["*.{py,java,r,R}]"]: {
      ["indent_style"]: "space",
      ["indent_size"]: 4,
    },
    ["*.{md,Rmd,rst}"]: {
      ["indent_style"]: "space",
      ["indent_size"]: 2,
      ["trim_trailing_whitespace"]: false,
    },
    ["*.{json,yml}"]: {
      ["indent_style"]: "space",
      ["indent_size"]: 2,
    },
  },
  marker: true,
});
project.synth();
