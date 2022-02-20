# LMS MDX Template

The goal of this project is to provide a `Next.js` starter template for a Learning Management System (LMS) that used `mdx` files for the learning content. An LMS is a platform for hosting courses and each course consists of modules or chapters, which in turn consist of lessons. The platform has the following two main characteristics:

- The lessons are decoupled from the courses. That means that the lessons are stored in folders that do not follow the course names but rather categories of learning content. In this way, the same lesson can be easily used in different courses under different modules and in different sequences.
- The course and lesson page style follows a successful model used by many leading learning platforms such as thinkific.com. I am using `tailwindcss` to style the site.

## Deploy your own (To-do)

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-mdx-remote&project-name=with-mdx-remote&repository-name=with-mdx-remote)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-mdx-remote with-mdx-remote-app
# or
yarn create next-app --example with-mdx-remote with-mdx-remote-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## Notes (To-do)

