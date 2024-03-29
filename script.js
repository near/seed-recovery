import 'regenerator-runtime'

import { generateSeedPhrase, parseSeedPhrase } from 'near-seed-phrase'

const qs = (s) => document.querySelector(s)

const options = {
    nodeUrl: 'https://rpc.mainnet.near.org',
    networkId: 'mainnet',
    deps: {}
};

function init() {
    qs('#button').onclick = () => {
        const val = qs('#phrase').value
        console.log(val)
        let phrase = val
        if (val.indexOf('recover-with-link') > -1) {
            phrase = decodeURI(val.split('recover-with-link')[1].split('/')[2])
        }
        const { publicKey, secretKey } = parseSeedPhrase(phrase)
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
	qs('#random').onclick = () => {
        const { seedPhrase, publicKey, secretKey } = generateSeedPhrase()
        qs('#phrase').value = seedPhrase
        qs('#publicKey').value = publicKey
        qs('#secretKey').value = secretKey
    }
}

window.onload = init;

