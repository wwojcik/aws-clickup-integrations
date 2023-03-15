import {
  CodeOfConduct,
  Contributors,
  Recommended,
} from "@mountainpass/cool-bits-for-projen";
import { nx_monorepo } from "aws-prototyping-sdk";
const project = new nx_monorepo.NxMonorepoProject({
  defaultReleaseBranch: "main",
  devDeps: ["aws-prototyping-sdk", "@mountainpass/cool-bits-for-projen"],
  name: "aws-clickup-integrations",
  authorEmail: "wojtaswojcik@gmail.com",
  authorName: "Wojciech Wójcik",
  github: true,
  ...Recommended.defaultProjectOptions,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.addGitIgnore(".nx/cache");
new Recommended(project);
new CodeOfConduct(project, {
  contactMethod: "email: wojtaswojcik@gmail.com",
});
new Contributors(project, {
  autoPopulateFromGit: false,
  contributors: true,
  additionalContributors: ["Wojciech Wójcik <wojtaswojcik@gmail.com>"],
});
project.synth();
