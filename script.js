import 'regenerator-runtime'

import * as nearAPI from 'near-api-js';

import { parseSeedPhrase } from 'near-seed-phrase'

const qs = (s) => document.querySelector(s)

const options = {
    nodeUrl: 'https://rpc.mainnet.near.org',
    networkId: 'mainnet',
    deps: {}
};

function init() {
    qs('#button').onclick = () => {
        const val = qs('#phrase').value
        const { publicKey, secretKey } = parseSeedPhrase(val)
        qs('#publicKey').value = publicKey
        qs('#secretKey').value = secretKey
    }
    qs('#reveal').onclick = () => {
        if (qs('#secretKey').type === 'text') {
            qs('#secretKey').type = 'password'
            qs('#reveal').innerHTML = 'Show Secret Key'
        } else {
            qs('#secretKey').type = 'text'
            qs('#reveal').innerHTML = 'Hide Secret Key'
        }
    }
}

window.onload = init;

