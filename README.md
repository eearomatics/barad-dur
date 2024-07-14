[![Website Badge](https://img.shields.io/badge/Website-eearomatics.com-white?style=for-the-badge&logo=square&logoColor=%23ffffff&labelColor=%23bebba8)](https://www.eearomatics.com)

# Barad-dûr

> He is always watching, from the tower of Barad-dûr

This project is a utility repository for the organization to test, validate, and benchmark the performance of our website.

## How It Works

This is powered by GitHub Actions and makes use of the following projects:

1. [Parse Sitemap](https://github.com/simenandre/parse-sitemap)
2. [Lighthouse CI Action](https://github.com/treosh/lighthouse-ci-action)

The first Action parses the sitemap and outputs a newline-delimited string of URLs found in the sitemap.

The second Action runs Lighthouse CI against all URLs found in the first Action.

## Continuous Testing

The workflow is triggered by pushes to the `main` branch to support changes to the workflow as well as by a cron job.

The job executes the first of every month at 0500 UTC.
