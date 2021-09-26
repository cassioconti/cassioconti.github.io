# Using LaTeX with VSCode

## Prerequisite

```sh
# install texlive
sudo apt install texlive-latex-extra
```

## VSCode extension

1. Install [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)
2. Configure VSCode `settings.json`:
```json
{
    "latex-workshop.latex.autoBuild.run": "onSave",
    "latex-workshop.latex.recipe.default": "lastUsed",
    "latex-workshop.view.pdf.viewer": "tab",
    "latex-workshop.latex.recipes": [
        {
            "name": "pdflatex",
            "tools": [
                "pdflatex"
            ]
        },
        {
            "name": "pdflatex ➞ bibtex ➞ pdflatex`×2",
            "tools": [
                "pdflatex",
                "bibtex",
                "pdflatex",
                "pdflatex"
            ]
        }
    ]
}
```

3. Create a .tex file

```tex
\documentclass[letterpaper]{article}
\usepackage[english]{babel}
\usepackage{blindtext}

% (optional) Create table of contents
% \usepackage[nottoc]{tocbibind}

\title{A novel technique on an old problem}
\author{Cassio Conti}
\date{}

\begin{document}

\maketitle

% \tableofcontents

\begin{abstract}
    \blindtext
\end{abstract}

\section{First Section}

\subsection{My item}

\blindtext

\subsection{My other item}

\blindtext

\section{Second Section}

\subsection{My item}

\blindtext

\blindtext

\subsection{My other item}

\blindtext

% (optional) Add bibliography -- file "bib.bib".
% \bibliographystyle{unsrt}
% \bibliography{bib}
\end{document}
```

4. (optional) Create bib file

```bib
@article{spoon01,
  author  = {{Spoon}, H.~W.~W. and {Keane}, J.~V. and {Tielens}, A.~G.~G.~M. and
              {Lutz}, D. and {Moorwood}, A.~F.~M.},
  title   = {{The obscured mid-infrared continuum of NGC 4418: A dust- and ice-enshrouded AGN}},
  journal = {aap},
  year    = 2001,
  month   = jan,
  volume  = 356,
  pages   = {L353-L356}
}

@inproceedings{Bridger94,
  author    = {{Bridger}, A. and {Wright}, G. S. and {Geballe}, T. R.},
  title     = {{Dust Absorption in NGC1068}},
  booktitle = {ASSL Vol. 190: Astronomy With Arrays, The Next Generation},
  year      = 1994,
  pages     = {537}
}

@book{abramowitz+stegun,
  author    = {Milton {Abramowitz} and Irene A. {Stegun}},
  title     = {Handbook of Mathematical Functions with
              Formulas, Graphs, and Mathematical Tables},
  publisher = {Dover},
  year      = 1964,
  address   = {New York City},
  edition   = {ninth Dover printing, tenth GPO printing}
}
```
