const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const nextConfiguration = {
  target: "serverless",
  images: {
    domains: ["images.unsplash.com", "random.unsplash.com"],
    formats: ["image/webp", "video/mp4"],
  },
  webpack: (config, { isServer }) => {
    // Add a custom loader for video files
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          fallback: "file-loader",
          publicPath: "/_next/static/videos/",
          outputPath: "static/videos/",
          name: "[name].[hash].[ext]",
        },
      },
    });

    if (!isServer) {
      // Configure the video file types to be handled by the browser's native player
      config.module.rules.push({
        test: /\.(mp4|webm)$/,
        use: {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/videos/",
            outputPath: "static/videos/",
            name: "[name].[hash].[ext]",
          },
        },
      });
    }

    return config;
  },
};

module.exports = withPlugins([optimizedImages], nextConfiguration);
