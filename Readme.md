# Movie-Explorer: Data-Importer

Mit diesem Skript können Sie den Import der im *JSON*-Format vorliegenden Filme in die benötigte SQLite-Datenbank automatisieren. Wir haben Ihnen dazu einen Teil des Skripts bereits vorgegeben. Sie müssen noch eine geeignete Datenbankstruktur erstellen und die SQL-Querys zum Eintragen der einzelnen Geschichten schreiben. Aktuell erstellt das Skript eine leere SQLite-Datenbank, iteriert über einen angegebenen Ordner und wandelt die dortigen Dateien in JavaScript-Objekte um, die einzelne Filme zu repräsentieren. Für jeden Film wird in dem zentralen Modul der Anwendung (`index.js`) einmal die *Callback*-Methode [`onMovieParsed`](hhttps://github.com/Webtechnologien-Regensburg/Movie-Explorer-Data-Importer/blob/7d654d74ccb324b71b97fab1401cccea78942380/index.js#L9) aufgerufen. Im Parameter finden Sie den jeweiligen Film, die bereits an das `DatabaseImporter`-Modul weitergeben wird. Dort müssen die Informationen aus dem JavaScript-Objekt dann in die SQLite-Datenbank übertragen werden.

**Bei Fragen zu diesem Teil der Aufgabe wenden Sie sich bitte an Alexander Bazo.**

## Grundlagen

Der Skript funktioniert mit den JSON-formatierten *Movie*-Dateien, die wir Ihnen in einem separaten Datensatz bereitgestellt haben. Diese Daten haben wir aus der [Open Movie Database](https://www.omdbapi.com/) extrahiert. Über diesen _Importer_ werden die Daten für die weitere Verwendung in den Projekten angepasst. Dabei werden die einzelnen Datensätze, die innerhalb der JSON-Dateien vollständig vorliegen, auf die notwendigen Informationen für die Realisierung des _Movie Explorer_ reduziert:

```
{ 
  "title": "Jurassic Park", 
  "year": 1993, 
  "director": "Steven Spielberg", 
  "genre": "Action",
  "actors": [{
    "name": "Sam Neill"
  },{
    "name": "Laura Dern"
  },{
    "name": "Jeff Goldblum"
  },
  ,{
    "name": "Richard Attenborough"
  }],
  poster: "https://m.media-amazon.com/images/M/MV5BZTFjNjU4OTktYzljMS00MmFlLWI3NGEtNjNhMTYwYzUyZDgyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
}
```

Der Skript exportiert alle relevanten Informationen aus diesen Dateien. Die exportierten Daten werden innerhalb des Skripts als [Movie-Prototyp](https://github.com/Webtechnologien-Regensburg/Movie-Explorer-Data-Importer/blob/7d654d74ccb324b71b97fab1401cccea78942380/lib/MovieParser.js#L14) abgebildet und kommuniziert. Sie können bei Bedarf weitere Filme ergänzen, in dem Sie die JSON formatierten Daten über [dieses Anfrageformular](https://www.omdbapi.com/#examples) erstellen und in einzelnen `*.json`-Dateien im Ordner `data` abspeichern.

## Vorbereitung

- Laden Sie den Quellcode über [diesen Link](https://github.com/Webtechnologien-Regensburg/Movie-Explorer-Data-Importer/archive/refs/heads/master.zip) herunter. 
- Führen Sie im Projektverzeichnis, in einer Kommandozeile, den Befehl `npm install` aus, um alle notwendigen Abhängigkeiten zu installieren.
- Erstellen Sie einen Ordner `data` im Projektverzeichnis und kopieren Sie die bereitgestellten JSON-Dateien dort hinein

## Starten des Import-Skripts

- Führen Sie im Projektverzeichnis, in einer Kommandozeile, den Befehl `npm start` aus
- Der Skript erstellt eine leere SQLite-Datenbank (`db.sqlite`) und versucht alle JSON-Dateien aus dem `data`-Verzeichnis zu importieren

### TODOs

- Ergänzen Sie im Modul `DatabaseImporter.js` die notwendige Funktionalität zum Erstellen eines geeigneten Datenbankschemas
- Vervollständigen Sie im Modul `DatabaseImporter.js` die Methode zum Überführen des JavaScript-OBjekts in die Datenbank