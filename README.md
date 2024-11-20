<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Next.js Project Setup</title>
</head>
<body>
    <header>
        <h1>Next.js Project Setup</h1>
        <p>Follow these steps to set up and run a Next.js project from scratch or by cloning a GitHub repository.</p>
    </header>

    <section>
        <h2>1. Install Node.js and npm</h2>
        <p>Before starting, ensure you have Node.js and npm installed on your system. You can download and install them from the official <a href="https://nodejs.org/" target="_blank">Node.js website</a>.</p>
    </section>

    <section>
        <h2>2. Create a New Next.js Project</h2>
        <p>If you want to start a new project, run the following command to create a new Next.js app:</p>
        <pre><code>npx create-next-app@latest my-nextjs-app</code></pre>
        <p>This will set up a new Next.js app in the <strong>my-nextjs-app</strong> directory. You can change the project name as needed.</p>
    </section>

    <section>
        <h2>3. Clone a Next.js Project from GitHub</h2>
        <p>If you prefer to start from an existing GitHub repository, you can clone a Next.js project with the following steps:</p>
        <ol>
            <li>Navigate to the directory where you want to store the project.</li>
            <li>Clone the repository using this command:</li>
            <pre><code>git clone https://github.com/username/repository-name.git</code></pre>
            <li>Replace <code>username</code> and <code>repository-name</code> with the actual GitHub username and repository name.</li>
            <li>Navigate into the project directory:</li>
            <pre><code>cd repository-name</code></pre>
        </ol>
    </section>

    <section>
        <h2>4. Install Dependencies</h2>
        <p>If you cloned a project from GitHub or created a new one, make sure to install the required dependencies by running:</p>
        <pre><code>npm install</code></pre>
    </section>

    <section>
        <h2>5. Run the Development Server</h2>
        <p>Start the development server with the following command:</p>
        <pre><code>npm run dev</code></pre>
        <p>Open your browser and go to <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> to see your app running.</p>
    </section>

    <section>
        <h2>6. Edit Your Project</h2>
        <p>You can now start editing your project. Modify the <code>pages/index.js</code> file to customize the homepage. Changes will be reflected in real-time as you edit.</p>
    </section>

    <section>
        <h2>7. Learn More</h2>
        <p>For more information about Next.js, refer to the official <a href="https://nextjs.org/docs" target="_blank">Next.js Documentation</a>.</p>
    </section>

    <footer>
        <p>Happy coding!</p>
    </footer>
</body>
</html>
