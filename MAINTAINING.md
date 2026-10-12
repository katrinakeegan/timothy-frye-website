# Updating the site

Everything here can be done in a web browser on github.com: open the file, click the pencil icon, make the change, and click **Commit changes**. The live site updates about five minutes later. The **Actions** tab shows a green check when it is done, or a red X if something in the edit broke the build.

## Add an article or chapter

Edit `_bibliography/papers.bib`. Copy an existing entry, paste it in the right place (the file runs newest first), and change the fields:

```bibtex
@article{frye2027example,
  title = {Title of the Article},
  author = {Frye, Timothy and Coauthor, First},
  journal = {Journal Name},
  year = {2027},
  volume = {10},
  number = {2},
  pages = {100--120},
  doi = {10.1234/example},
  topics = {elections, russia},
  abstract = {Paste the abstract here.}
}
```

- The first line's key (`frye2027example`) must be unique in the file.
- Authors are written `Last, First` and separated by `and`.
- `topics` controls which filter buttons show the entry. Use the ids listed in `_data/topics.yml`, separated by commas. An entry with no topics is hidden whenever a filter is selected.
- `abstract` and `doi` are optional. With them, the entry gets "Abs" and "DOI" buttons.
- For a book chapter, start with `@incollection` and use `booktitle`, `editor` and `publisher` in place of `journal`.
- Write `\&` and `\%` in place of `&` and `%`.

## Change the topic filters

Edit `_data/topics.yml`. Each filter has an `id` (used in `papers.bib`) and a `label` (shown on the button).

## Replace the CV

Upload the new PDF to `assets/pdf/` with the exact name `Frye_CV.pdf`, replacing the old one.

## Add a book

Edit `_data/books.yml` and copy an existing block to the top. For a cover, upload the image to `assets/img/book_covers/` and put its file name after `cover:`.

## Edit page text

| Page | File |
| --- | --- |
| Home (bio, title, office address) | `_pages/about.md` |
| Teaching | `_pages/teaching.md` |
| Headshot | add the image to `assets/img/`, then set `image:` in `_pages/about.md` |
| Email and contact icons | `_data/socials.yml` |
