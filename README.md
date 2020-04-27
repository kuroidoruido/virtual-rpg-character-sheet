# VirtualRpgCharacterSheet

![Deploy to GitHub Pages](https://github.com/kuroidoruido/virtual-rpg-character-sheet/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)

Simple RPG character sheet manager for players and GMs.

This tool aims to work without any back ou server, just the web client host somewhere.

Disclaimer: THIS IS A WORKING IN PROGRESS PROJECT SO IT'S NOT A PERFECT TOOL! You are welcome for tests and give feedback!

[See deployed version on Github Pages](https://kuroidoruido.github.io/virtual-rpg-character-sheet/)

![Simple preview of Call of Cthulhu v7 fr classical sheet](screenshot.png)

# State of the project

## What's working?

- can play to Call of Cthulhu v7 with french classical sheet
- can save (local storage = in your browser) your sheet state
- have different placeholders: 
    - text (static, readonly)
    - checkbox/checkbox bar (for example for Call of Cthulhu v7 we can use this for life point)
    - textarea (for multiline text input)
    - computed input (for value that depends from other ones)
- Save with Ctrl+Shift+s
- free note zone (for taking notes during a session)
- share link: will offer a way to make someone else our sheet (without server)
- radio element (grouped) with differents visual shape (cross, circle, square) 

## What's next?

- Save needed indicator (when data are changed and we have not saved yet)
- import/export feature
- print mode (convert editable field as static field, make multiple page on column, make it fit in A4 pages)
- more game sheet:
    - Billet Rouge
    - Cats La Mascarade
    - ...
- can keep more than one character for one particular game for one user
- a simple dice roller
- a sheet builder assistant (because it's really boring to make it through json...)
- insert image (character photo), should be save as Base64 to have no external files + resize/compress to be lightweight
- give user access to prettify raw data map (add a button in sheet config panel to access a simple array of all keys/values, maybe with edition)
- checkbox (and checkbox group) can toggle between multiple style (for example: none, filled circle, cross)
- home page with product presentation
