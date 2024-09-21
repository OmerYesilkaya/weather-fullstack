require("esbuild")
    .build({
        entryPoints: ["./dist/index.js"], // Point to the transpiled code
        bundle: true,
        outfile: "./dist/bundle.js",
        platform: "node",
        target: "es2017",
        sourcemap: true,
        minify: true,
    })
    .catch(() => process.exit(1));
