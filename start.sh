#!/bin/bash

node ./category-service/index.js &

node ./book-service/index.js &

node ./author-service/index.js &