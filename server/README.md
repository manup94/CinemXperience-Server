# CinemXperience-Server
Final proyect IronHack

# INTRODUCTION
In this final bootcamp project, we are going to create a website for cinema platforms where users will be able to purchase movie tickets for sessions and also place their food orders. Additionally, the administrator will be able to create movie sessions obtained from an external API and create new food combos. We will be using the technologies React, MongoDB, Express, and Node for this.


**Auth**
Base URL /auth
| HTTP | URL PATH |    DESCRIPTION    |
| :--- | :------: | :---------------: |
| POST | /signup  |    Signup user    |
| POST |  /login  |    Login User     |
| GET  | /verify  | Verify auth token |

**Pass**
Base URL  /pass
| HTTP   |      URL PATH       |   DESCRIPTION   |
| :----- | :-----------------: | :-------------: |
| GET    |       /getAll       |  Get all pass   |
| GET    | /pass_id/getOnePass |  Get one pass   |
| POST   |   /createNewPass    | Create new pass |
| DELETE |  /:pass_id/delete   |   Delete pass   |

**Combos**
Base URL  /combo
| HTTP   |        URL PATH        |   DESCRIPTION    |
| :----- | :--------------------: | :--------------: |
| GET    |     /getAllCombos      |  Get all combos  |
| GET    | /:combo_id/getOneCombo |  Get one combo   |
| POST   |    /createNewCombo     | Create new combo |
| DELETE |   /:combo_id/delete    |   Delete combo   |

**Movies**
Base URL  /combo
| HTTP |          URL PATH           |                  DESCRIPTION                  |
| :--- | :-------------------------: | :-------------------------------------------: |
| GET  |            /list            | Get all movies that are currently in theaters |
| GET  |      /movie/:movie_id       |              Get one movie info               |
| GET  |       /list/top_rated       |             Get top rated movies              |
| GET  |  /list/top_rated/:genre_id  |    Get top rated movies divided in genres     |
| Post | /populatedMoviesFromTickets |            Get movies from tickets            |

**Profile**
Base URL  /combo
| HTTP |              URL PATH               |                    DESCRIPTION                    |
| :--- | :---------------------------------: | :-----------------------------------------------: |
| GET  |     /:profile_id/getOneProfile      |           Get one profile info from id            |
| PUT  |       /:profile_id/getTickets       |        Get tickets of the specific profile        |
| PUT  |          /:profile_id/edit          |          Allow user to edit profile info          |
| GET  |      /:pack_id/getPackDetails       |        Get pack details from specific user        |
| Post |      /:movie_id/AddWatchlistId      | Get movies that user has added to their watchlist |
| Post | /:movie_id/removeMovieFromWatchlist |         Remove a movie from the watchlist         |

**Upload**
Base URL  /combo
| HTTP | URL PATH |        DESCRIPTION         |
| :--- | :------: | :------------------------: |
| POST |  /image  | Upload image to cloudinary |
