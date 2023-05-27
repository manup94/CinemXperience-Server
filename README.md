# CinemXperience-Server
Final proyect IronHack

API  TMBD
| HTTP |                               URL PATH                               |        DESCRIPTION        |
| :--- | :------------------------------------------------------------------: | :-----------------------: |
| GET  | https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1 |    Movies in theatres     |
| GET  |     https://api.themoviedb.org/3/movie/{movie_id}?language=es-ES     | Matching ID movie details |


**Auth**
Base URL /auth
| HTTP | URL PATH |    DESCRIPTION    |
| :--- | :------: | :---------------: |
| POST | /signup  |    Signup user    |
| POST |  /login  |    Login User     |
| GET  | /verify  | Verify auth token |

**Sessions**
Base URL  /sessions
| HTTP   |     URL PATH      |    DESCRIPTION     |
| :----- | :---------------: | :----------------: |
| GET    |  /getAllSessions  |  Get all sessions  |
| POST   | /createNewSession | Create new session |
| PUT    |     /:id/edit     |    Edit session    |
| DELETE |    /:id/delete    |   Delete session   |

**Combos**
Base URL  /combo
| HTTP   |    URL PATH     |    DESCRIPTION    |
| :----- | :-------------: | :---------------: |
| GET    |  /getAllCombo   |  Get all combos   |
| POST   | /createNewCombo | Create new combos |
| PUT    |    /:id/edit    |   Delete Combo    |
| DELETE |   /:id/delete   |   Delete combo    |

