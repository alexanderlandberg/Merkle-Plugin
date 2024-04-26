## WhoIsWho-Plugin

### How to enable:

1. Add extension to chrome
   - Note: From June 2024, developer mode will be mandatory for user scripts. [Read more](https://developer.chrome.com/docs/extensions/reference/api/userScripts?hl=en#developer_mode_for_extension_users).
2. Copy script to clipboard
3. Go to whoiswho.agency
4. Click the extension and the "+"
5. Paste in the script on the left side ("<i>Start typing JavaScript here</i>")
6. Save and close.
7. Refresh whoiswho and enjoy

### Extension

[User JavaScript and CSS](https://chromewebstore.google.com/detail/nbhcbdghjpllgmfilhnhkllmkecfmpld)

### Script

```
var j = document.createElement('script'); j.src = 'https://alexanderlandberg.github.io/Merkle-Plugin/whoiswho/script.js'; document.querySelector('head').appendChild(j); var s = document.createElement('link'); s.rel = 'stylesheet'; s.href = 'https://alexanderlandberg.github.io/Merkle-Plugin/whoiswho/styles.css'; document.querySelector('head').appendChild(s);
```

<br>
  
## Merkle Gifs

[Link to Merkle gifs](https://alexanderlandberg.github.io/merkle-gifs/)

<br>

## Email Frontend Plugin

[Link to chrome extension](https://chromewebstore.google.com/detail/email-frontend-tool/mofpmgeeieehfbcddmgjadobdfiobkcd)
