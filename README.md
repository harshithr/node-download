NODE-DOWNLOAD
=========

A small library for downloading files and saving them to local system.

## Installation

  `npm install node-download`

## Usage
  download: method
    arguements: [ url, path (__dirname + path), file_name ]

  Ex: 
  const { download } = require('node-download);
  download(value.image, __dirname + '/images', `${value.slug}.webp`);
    