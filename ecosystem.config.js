module.exports = {
    apps: [
        {
            name: "media-share-backend",
            script: "npm",
            args: "run prod",
            cwd: "./backend",
            env: {
                NODE_ENV: "production",
                PORT: 8080, // Set the backend port
            },
        },
        {
            name: "media-share-frontend",
            script: "npm",
            args: "run start",
            cwd: "./frontend",
            watch:['./frontend/.next'],
            env: {
                NODE_ENV: "production",
                API_URL: "http://localhost:8080", // Set the backend URL
                PORT: 3000, // Set the frontend port
            },
        },
    ],
};
