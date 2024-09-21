## Using the Starter Project

If you want to use this starter project as a base for your own work and keep it completely separate from the original repository, follow these steps:

### 1. Fork the Repository

1. Go to the GitHub page of this starter project.
2. Click the **Fork** button at the top right corner of the page.
3. This will create a copy of the repo in your GitHub account.

### 2. Clone Your Forked Repository

1. Navigate to your forked repository on GitHub.
2. Click the **Code** button and copy the URL.
3. Open your terminal and run:
    ```bash
    git clone <your-forked-repo-url>
    ```
4. This will create a local copy of your forked repo on your machine.

### 3. Remove the Link to the Original Repository

1. Navigate to the cloned repo’s directory:
    ```bash
    cd <your-repo-directory>
    ```
2. Check the current remotes:
    ```bash
    git remote -v
    ```
3. Remove the `origin` remote (which points to the original repo):
    ```bash
    git remote remove origin
    ```
4. Optionally, add a new remote if you want to push changes to a different repository in the future:
    ```bash
    git remote add origin <new-repo-url>
    ```

### 4. Start Coding

You can now code freely within this repo without any connection to the original repository.
