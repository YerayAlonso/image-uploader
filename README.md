<h1 align="center">Image Uploader</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://image-uploader-ashen.vercel.app/">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/YerayAlonso/image-uploader">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/O2iGT9yBd6xZBrOcVirx">
      Challenge
    </a>
  </h3>
</div>

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
  - [User Stories](#user-stories)
- [How to use](#how-to-use)
  - [Cloudinary settings](#cloudinary-settings)
  - [Run the app](#run-the-app)

## Overview

![screenshot](https://res.cloudinary.com/dqruxwqi9/image/upload/v1690591272/r7seh7ylzhup4yy1mq4d.png)

Introduce your projects by taking a screenshot or a gif. Try to tell visitors a story about your project by answering:

- Where can I see your demo?
- What was your experience?
- What have you learned/improved?
- Your wisdom? :)

### Built With

- [Svelte](https://svelte.dev/)
- [SvelteKit](https://kit.svelte.dev/)
- [Tailwind](https://tailwindcss.com/)
- [Cloudinary](https://cloudinary.com/)

## Features

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/O2iGT9yBd6xZBrOcVirx) was to build an application to complete the given user stories.

### User Stories

- I can drag and drop an image to upload it
- I can choose to select an image from my folder
- I can see a loader when uploading
- When the image is uploaded, I can see the image and copy it
- I can choose to copy to the clipboard

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) installed on your computer.
Also, you can choose to use [pnpm](https://pnpm.io/) or [npm](http://npmjs.com) to build the project. From your command line:

```bash
# Clone this repository
$ git clone github.com/YerayAlonso/image-uploader

# Install dependencies
$ pnpm i
```

### Cloudinary settings

Before running the project, you'll need an account at [Cloudinary](https://cloudinary.com/).
Once logged in, go to "Dashboard" and write down your "Cloud Name".
Also, go to "Settings -> Upload" and create an unsigned preset with the "Enable unsigned uploading" button. Write down the "Name" of that newly created upload unsigned preset.

Create a `.env` file with in the form below, filling the `{}` spaces with the values noted above.

```ini
CLOUDINARY_URL='https://api.cloudinary.com/v1_1/{your_cloud_name}/image/upload'
CLOUDINARY_UPLOAD_PRESET='{your_upload_unsigned_preset_name}'
```

### Run the app

### Developing

Once you've created a project and installed dependencies, start a development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

### Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.