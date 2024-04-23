addSubDomain({
  description: 'simple proxy for netlify',
  domain: 'is-an.app',
  subdomain: 'preston-code-pox',
  owner: {
    repo: 'https://github.com/preston-riley/',
    email: 'pres1234569@gmail.com',
  },
  record: {
    TXT: ['_vercel', "vc-domain-verify=preston-code-pox.is-an.app,7177e2d5277623595f36"],
  },
})
