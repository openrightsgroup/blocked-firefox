blocked-firefox
===============

A firefox add-on that uses blocked.org.uk to see if the page you're on is blocked by content filters in the UK

To install Dev Version
======================

Find your Firefox plugins folder. Help, Troubleshooting, Profile Directory, "extensions" folder.

Place the contents of this git repo in a folder called "check@block.org" in this "extensions" folder.

Restart Firefox.

It should ask you for permissions to install it.

Right click on your toolbar and click customise. There should be a "Blocked" option you can drag into your toolbar


How to package for others
=========================

Zip up the contents of this repo into a ".zip" file. Rename it "check@blocked.org.xpi".

Place this online and get another Firefox user to open the URL in FireFox.


To use
======

On any webpage, click the Block button in the toolbar. A new window will open, showing you what blocked.org knows about this site.
