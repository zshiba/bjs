# bjs
This is a tiny Google Chrome extension that lets you block / allow JavaScript on the current site by one click.

## Install 
1. Download the zip of this repository, and then unzip it. Or, clone the repository with the git command.
```bash
$ git clone https://github.com/zshiba/bjs.git
```
2. Launch Chrome, and then open `chrome://extensions`
3. Enable **Developer mode**.
4. Click **LOAD UNPACKED**.
5. Select the **bjs** directory.
6. If the installation succeeds, then a button with `b` will appear next to the URL bar.
7. Disable **Developer mode**.

![install](https://github.com/zshiba/bjs/blob/master/install.jpg)

## How It Works
By clicking the `b` button intorduced by this extension, you register (the origin of) URL of the current site, shown in the active tab, to the list that you can find at `chrome://settings/content/javascript`

* If (the origin of) the URL has not been registered yet or is appearing in the Allow section already, then (the origin of) the URL is put in the Block section.
* If (the origin of) the URL is appearing in the Block section already, then (the origin of) the URL is put in the Allow section.

After the registration process is completed, the active tab will be reloaded automatically.
* If JavaScript is blocked on the current page, then an icon appears next to the bookmark button in the URL bar.
![block](https://github.com/zshiba/bjs/blob/master/block.jpg)

## Limitation
Once you put URL in the list by using this extension, the URL will keep being either in the Allow or in the Block section. To remove the URL from the list, this extension needs to be removed from Chrome.

## Uninstall
1. Launch Chrome, and then open `chrome://extensions`
2. Click **REMOVE** for bjs.

## Development Environment
Mac, Google Chrome Ver. 66 (64-bit)

## License
MIT
