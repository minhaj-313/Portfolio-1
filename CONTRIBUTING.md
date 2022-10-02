# Contributing

The following is a set of guidelines for contributing to Portfolio-1, which is hosted on [Github](https://minhaj-313.github.io/Portfolio-1/). These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

# How Can I Contribute?

In order to discuss changes, you are welcome to [open an issue](https://github.com/minhaj-313/Portfolio-1/issues/new) about what you would like to contribute. Enhancements are always encouraged and appreciated.

---

## ⭐ HOW TO MAKE A PULL REQUEST:

**1.** Start by making a Fork of the [Portfolio-1](https://github.com/minhaj-313/Portfolio-1) repository. Click on the <a href="https://github.com/skpandey885/HealhUb"><img src="https://i.imgur.com/G4z1kEe.png" height="21" width="21"></a>Fork symbol at the top right corner.

**2.** Clone your new fork of the repository in the terminal/CLI on your computer with the following command:

```bash
git clone https://github.com/<your-github-username>/Portfolio-1
```

**3.** Navigate to the newly created Portfolio-1 project directory:

```bash
cd Portfolio-1
```

**4.** Set upstream command:

```bash
git remote add upstream https://github.com/minhaj-313/Portfolio-1.git
```

**5.** Create a new branch:

```bash
git checkout -b YourBranchName
```

**6.** Sync your fork or your local repository with the origin repository:

- In your forked repository, click on "Fetch upstream"
- Click "Fetch and merge"

### Alternatively, Git CLI way to Sync forked repository with origin repository:

```bash
git fetch upstream
```

```bash
git merge upstream/main
```

### [Github Docs](https://docs.github.com/en/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github) for Syncing

**7.** Make your changes to the source code.

**8.** Stage your changes:

⚠️ **Make sure** not to commit `package.json` or `package-lock.json` file

⚠️ **Make sure** not to run the commands `git add .` or `git add *`

> Instead, stage your changes for each file/folder
>
> By using public path it means it will add all files and folders under that folder, it is better to be specific

```bash
git add public
```

_or_

```bash
git add "<files_you_have_changed>"
```

**9.** Commit your changes:

```bash
git commit -m "<your_commit_message>"
```

**10.** Push your local commits to the remote repository:

```bash
git push origin YourBranchName
```

**11.** Create a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)!

**12.** **Congratulations!** You've made your first contribution to [**Portfolio-1**](https://github.com/minhaj-313/Portfolio-1/contributors)! 🙌🏼

**_:trophy: After this, the maintainers will review the PR and will merge it if it helps move the project forward. Otherwise, it will be given constructive feedback and suggestions for the changes needed to add the PR to the codebase._**
