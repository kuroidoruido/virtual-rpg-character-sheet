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

## What's next?

- split sheet configuration from user data
- share link: will offer a way to make someone else our sheet (without server)
- print mode (convert editable field as static field, make multiple page on column, make it fit in A4 pages)
- have more than text input as sheet placeholder: 
    - text (static, readonly)
    - computed (for value that depends than another one)
    - checkbox/checkbox bar (for example for Call of Cthulhu v7 we can use this for life point)
    - textarea (for multiline text input)
- game/sheet selector
- more game sheet
- character selector
- can keep more than one character for one particular game for one user
- free note zone (for taking notes during a session)
- a simple dice roller
- a sheet builder assistant (because it's really boring to make it through json...)
- ability to set sheet width with kept ratio
