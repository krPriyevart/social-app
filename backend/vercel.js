{
    "version":2,
    "build": [
        {"src": "*.js", "use": "@vercel/node"}
    ],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "/"
            
        }
    ]
}