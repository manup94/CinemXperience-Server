# CinemXperience-Server
Final proyect IronHack

# INTRODUCTION
In this final bootcamp project, we are going to create a website for cinema platforms where users will be able to purchase movie tickets for sessions and also place their food orders. Additionally, the administrator will be able to create movie sessions obtained from an external API and create new food combos. We will be using the technologies React, MongoDB, Express, and Node for this.


API  TMBD
| HTTP |                               URL PATH                               |        DESCRIPTION        |
| :--- | :------------------------------------------------------------------: | :-----------------------: |
| GET  | /list |    Movies in theatres     |
| GET  |  https://api.themoviedb.org/3/movie/{movie_id}?language=es-ES     | Matching ID movie details |


**Auth**
Base URL api/auth
| HTTP | URL PATH |    DESCRIPTION    |
| :--- | :------: | :---------------: |
| POST | /signup  |    Signup user    |
| POST |  /login  |    Login User     |
| GET  | /verify  | Verify auth token |

**Sessions**
Base URL  api/sessions
| HTTP   |     URL PATH      |    DESCRIPTION     |
| :----- | :---------------: | :----------------: |
| GET    |  /getAllPass  |  Get all pass  |
| GET    |  /:pass_id/getOnePass |  Get pass details  |
| POST   | /createNewPass | Create new pass |
| PUT    |     /:pass_id/edit     |    Edit pass    |
| DELETE |    /:pass_id/delete    |   Delete pass   |

**Combos**
Base URL  api/combo
| HTTP   |    URL PATH     |    DESCRIPTION    |
| :----- | :-------------: | :---------------: |
| GET    |  /getAllCombos   |  Get all combos   |
| GET    |  /:combo_id/getOneCombo  |  Get combo details  |
| POST   | /createNewCombo | Create new combos |
| PUT    |    /:combo_id/edit    |   Edit combo    |
| DELETE |   /:combo_id/delete   |   Delete combo    |

