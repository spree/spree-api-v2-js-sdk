## Pull requests

We gladly accept pull requests to add new features, bug fixes, documentation updates and overall any improvements to the codebase. All contributions (even the smallest ones) are welcome!

Here's a quick guide:

1. Fork the repo (=**base**).
1. Clone the fork to your local machine.
1. Run `npm install` (`yarn install`)
1. Run `npm run build` (`yarn run build`) to generate the package. Alternatively, to have Webpack rebuild on every change in sources (/src), run `npm run watch` (`yarn run watch`).
1. Create a new git branch and apply the necessary changes. When updating source files, make sure to follow the [TSLint](https://palantir.github.io/tslint/) rules for the project. Also, please update the README if necessary.
1. Commit and push to your fork.
1. Submit a [pull request](https://help.github.com/en/articles/creating-a-pull-request-from-a-fork) to the **base**'s master branch. GitHub will warn of conflicts with the latest changes in the **base** repo. If there are any, please remove them and update your PR.
1. Once the PR is ready, it will appear in the **base** repo and await review from other developers. There may be comments and change requests. Try to regularly check how the PR is doing. Take part in any discussions about it. Doing so will increase the chances of it being accepted and accepted faster. Including a rich description of the change with the PR helps a lot as well.

We always try to quickly respond to new submissions. That being said, it may sometimes take longer than usual due to other PRs having priority.