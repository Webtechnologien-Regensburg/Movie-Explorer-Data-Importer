# Movie-Explorer: Data-Importer

Mit diesem Skript können Sie den Import der im *JSON*-Format vorliegenden Filme in die benötigte SQLite-Datenbank automatisieren. Wir haben Ihnen dazu einen Teil des Skripts bereits vorgegeben. Sie müssen noch eine geeignete Datenbankstruktur erstellen und die SQL-Querys zum Eintragen der einzelnen Geschichten schreiben. Aktuell erstellt das Skript eine leere SQLite-Datenbank, iteriert über einen angegebenen Ordner und wandelt die dortigen Dateien in JavaScript-Objekte um, die einzelne Filme zu repräsentieren. Für jeden Film wird in dem zentralen Modul der Anwendung (`index.js`) einmal die *Callback*-Methode [`onMovieParsed`](https://github.com/Webtechnologien-Regensburg/Fan-Fiction-Data-Importer/blob/f52771ae246e492709ace06ae7ca98c2344eff80/index.js#L9) aufgerufen. Im Parameter finden Sie den jeweiligen Film, die bereits an das `DatabaseImporter`-Modul weitergeben wird. Dort müssen die Informationen aus dem JavaScript-Objekt dann in die SQLite-Datenbank übertragen werden.

**Bei Fragen zu diesem Teil der Aufgabe wenden Sie sich bitte an Alexander Bazo.**

## Grundlagen

Der Skript funktioniert mit den JSON-formatierten *Movie*-Dateien, die wir Ihnen in einem separaten Datensatz bereitgestellt haben. Den Aufbau der Dateien können Sie anhand diesem Beispiels nachvollziehen:

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
  }]
}
```

Der Skript exportiert alle relevanten Informationen aus diesen Dateien. Die exportierten Daten werden innerhalb des Skripts als [Movie-Prototyp](https://github.com/Webtechnologien-Regensburg/Fan-Fiction-Data-Importer/blob/f52771ae246e492709ace06ae7ca98c2344eff80/lib/StoryParser.js#L41) abgebildet und kommuniziert.

## Vorbereitung

- Laden Sie den Quellcode über [diesen Link](https://github.com/Webtechnologien-Regensburg/Fan-Fiction-Data-Importer/archive/master.zip) herunter. 
- Führen Sie im Projektverzeichnis, in einer Kommandozeile, den Befehl `npm install` aus, um alle notwendigen Abhängigkeiten zu installieren.
- Erstellen Sie einen Ordner `data` im Projektverzeichnis und kopieren Sie die bereitgestellten JSON-Dateien dort hinein

## Starten des Import-Skripts

- Führen Sie im Projektverzeichnis, in einer Kommandozeile, den Befehl `npm start` aus
- Der Skript erstellt eine leere SQLite-Datenbank (`db.sqlite`) und versucht alle JSON-Dateien aus dem `data`-Verzeichnis zu importieren

### TODOs

- Ergänzen Sie im Modul `DatabaseImporter.js` die notwendige Funktionalität zum Erstellen eines geeigneten Datenbankschemas
- Vervollständigen Sie im Modul `DatabaseImporter.js` die Methode zum Überführen des JavaScript-OBjekts in die Datenbank