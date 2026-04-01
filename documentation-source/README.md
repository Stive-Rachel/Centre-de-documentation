# Depot des contenus documentaires

Ce dossier sert de source pour convertir les documents Word en pages web React du portail.

## Structure

- 1 dossier par module: gda, gdi, par, gnc, epp, mgp, gdr, sig
- 3 sous-dossiers fixes par module:
  - note-technique
  - guide-utilisateur
  - documentation-technique

## Ce qu'il faut deposer dans chaque section

- Le document source (Word): `source.docx`
- Les images extraites dans un sous-dossier `images/`
- Option recommande: un fichier `notes.md` avec:
  - titre principal
  - plan attendu (H2/H3)
  - points importants a mettre en avant

Exemple:

- `documentation-source/gdi/guide-utilisateur/source.docx`
- `documentation-source/gdi/guide-utilisateur/images/etape-1.png`
- `documentation-source/gdi/guide-utilisateur/images/etape-2.png`
- `documentation-source/gdi/guide-utilisateur/notes.md`

## Regle de conversion

- Le Word ne sera pas affiche directement.
- Le contenu sera transforme en page web interne React.
- Les images seront integrees dans la page web avec titre + legende si necessaire.

## Workflow

1. Tu deposes un document dans le bon dossier.
2. Tu me dis le module + section a traiter.
3. Je genere ou mets a jour la page React correspondante dans `src/`.
4. Je branche la page dans le registre si necessaire et je verifie la build.
