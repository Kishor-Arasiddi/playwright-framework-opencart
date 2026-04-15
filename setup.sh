#!/bin/bash
export PATH=$PATH:/opt/homebrew/bin:/usr/local/bin

npm install
npm install -D allure-playwright
npm install -g allure-commandline --force
npx playwright install