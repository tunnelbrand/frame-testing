#!/usr/bin/env bash
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

git clone https://github.com/coinbase/onchainkit.git "$SCRIPT_DIR/onchainkit"
 
cd "$SCRIPT_DIR/onchainkit/framegear"
npm install
npm run dev